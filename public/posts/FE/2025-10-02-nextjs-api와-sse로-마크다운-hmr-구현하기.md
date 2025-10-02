---
title: Next.js API와 SSE로 마크다운 HMR 구현하기
description: 이제 실시간으로 확인할 수 있다 !
date: 2025-10-02
thumbnail: /thumbnails/markdown-hmr.webp
---

블로그를 마크다운 기반으로 개발하면서, 가장 많이 느꼈던 필요성이 있었습니다.
바로 "마크다운 파일을 변경하면 변경된 내용으로 보여져야 한다"는 것이었는데요.

<br />

파일을 fs로 읽어오는 건 처음 페이지 진입 시점이다보니, 중간에 마크다운을 수정하더라도 이를 인식하지 못하는 현상이 있습니다.
그리고 이미 번들러의 HMR에 익숙해진 저는 이 사소하지만 굉장히 큰 불편함을 해소하고자 직접 구현하기에 나섭니다. (지금 블로그 개발 환경 기반에서 마크다운 HMR을 제공하는 오픈소스가 없더라고요 🥹)

<br />

#### HMR의 원리

HMR을 구현하려면 HMR이 실제로 어떻게 구현되어 있는지를 알아야겠죠?!

보통 번들러가 제공하는 개발 서버 안에서 HMR은 다음의 세 단계로 진행됩니다.

##### HMR 3단계

1. 변경 감지 (Detect)

> 파일 시스템을 감시하다가 특정 모듈 (ex: js, css) 이 변경되면 빌드 툴이 이를 알아차립니다.

2. 변경 알림 (Notify)

> 서버가 클라이언트 (브라우저) 와 유지 중인 연결 (웹소켓 등) 을 통해 “이 모듈이 바뀌었다”는 메시지를 보냅니다.

3. 모듈 교체 (Replace)

> 브라우저의 HMR 런타임이 해당 모듈만 다시 가져와서 실행 컨텍스트에 교체합니다.
> 이 때, 페이지 전체를 새로고침하지 않고 필요한 부분만 업데이트됩니다.

<br />

위 세 단계에서 볼 수 있는 핵심 구현 키워드는 `파일 감시, 실시간 연결, 변경 알림, 부분 모듈 교체`입니다.
즉, 직접 구현을 한다면 위 키워드를 만족하는 방식으로 구현하면 HMR의 원리를 따라갈 수 있습니다.

<br />

아래는 간단하게 HMR이 각 구현 키워드에 대해 내부적으로 어떻게 구현되어 있는지를 정리해두었습니다. (실제로 고도화된 HMR을 개발하는 것은 아니다보니 이 정도로도 충분했습니다ㅎㅎ)

|     키워드     | 구현 방식                                                                                                      |
| :------------: | -------------------------------------------------------------------------------------------------------------- |
|   파일 감시    | Node.js에서는 fs.watch나 chokidar로 파일 변화를 감시합니다.                                                    |
|  실시간 연결   | 서버와 브라우저는 WebSocket이나 SSE 같은 채널로 항상 연결을 유지합니다.                                        |
|   변경 알림    | 파일이 바뀌면 서버가 연결을 통해 브라우저에 “이 모듈이 변경됨” 이벤트를 전송합니다.                            |
| 부분 모듈 교체 | 브라우저 HMR 런타임이 해당 모듈만 다시 import하거나 교체하고, 프레임워크는 상태를 유지한 채로 UI를 갱신합니다. |

저는 이 HMR 기본 원리를 차용해서, 현재의 블로그 개발 구조와 도입해볼 수 있는 방안을 정리했습니다.

<br />

#### 현재 블로그 구조

현재 블로그는 Next.js 서버 컴포넌트를 기본으로, fs 모듈을 사용하여 마크다운 파일을 읽고 있습니다.

```tsx
import { readFileSync } from 'fs';

const post = readFileSync(
  path.resolve(process.cwd(), 'public', 'posts', category, fileName),
  'utf-8',
);
```

각 파일을 import를 사용하여 모듈 형식으로 읽어오는 형식이 아니다보니, 번들러의 기본 HMR 감시 범위에 포함되지 않습니다.
그렇기 때문에 마크다운 파일 내용이 변경되더라도, 페이지는 자동 리로드되지 않습니다. 이것이 근본적인 원인이죠!

<br />

#### 새로운 구조

그래서 위에서 다뤘던 `파일 감시 → 변경 알림` 플로우를 `실시간 연결` 아래에서 처리하는 구조를 새롭게 도입하는 것을 고려했습니다.
또한 현재 Next.js를 사용하고 있으니, Next.js API를 활용하여 클라이언트와의 실시간 연결을 유지하는 방향으로 계획했습니다.

<br />

조금 더 구체화해보겠습니다.

|    주체     | 담당                                                                                                                                                                           |
| :---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Next.js API | • SSE를 사용하여 클라이언트와 실시간으로 연결합니다.<br />• chokidar를 사용하여 마크다운 파일의 변경을 감시합니다.<br />• 파일 변경 감지 시, 클라이언트로 SSE 알림을 보냅니다. |
|   Client    | • 브라우저 접속 시 API를 통해 서버와 SSE 연결을 맺습니다.<br />• 서버로부터 변경 알림이 오면 브라우저를 새로고침합니다.                                                        |

:::note{.tip}
<b>chokidar 선택 이유</b>

- 마크다운 파일이 계속 늘어나거나 구조가 변하는 상황에 적합하다고 판단했습니다.
- chokidar는 크로스 플랫폼에서 안정적으로 파일 감시를 제공하고, 디렉토리 단위 감시와 파일 추가 / 삭제 이벤트까지 지원합니다.
  - Node.js 기본 fs.watch는 플랫폼별 동작 차이가 있고 상대적으로 안정성이 떨어질 수 있습니다.

<b>SSE 선택 이유</b>

- 원하는 기능은 서버 → 클라이언트 단방향 알림정도로 충분하다고 판단했습니다.
- 브라우저 기본 API 지원이라 추가 라이브러리 없이 간단히 구현 가능합니다.
- 연결 관리가 웹소켓보다 단순해, 개발 복잡도를 낮출 수 있습니다.

<b>부분 모듈 교체가 아닌 새로고침을 하는 이유</b>

- 보통 마크다운 파일은 fs로 읽거나 remark/rehype 파이프라인을 거쳐 HTML로 변환된 문자열입니다. 때문에 빌드 시점 또는 서버사이드에서만 처리되고, 클라이언트 번들에 "모듈"로 포함되는 구조가 아닙니다.
- 따라서 교체할 모듈이 존재하지 않기 때문에, 모듈 교체 방식이 아닌 router.refresh 같은 새로고침 방식이 필요합니다.

:::

<br />

#### API 구현

먼저, Next.js API 기능을 활용하여 SSE 연결을 맺을 API가 필요합니다.

원하는 API Route에 route.ts 파일을 만들고, 아래와 같은 기본 틀을 작성했습니다.

```ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return new Response(null, { status: 204 });
  }
}
```

:::note
runtime과 dynamic은 Next.js API Route 실행 환경을 지정하는 설정값입니다.

<br />

**runtime**

- 기본적으로 Next.js API Route는 nodejs (서버 런타임) 또는 edge (Edge Runtime) 중에서 선택할 수 있습니다.
- chokidar 같이 파일시스템 접근이 필요한 경우는 Edge 환경에서 동작하지 않으므로, Node.js 런타임을 강제해야 합니다.

**dynamic**

- Next.js는 API Route도 정적으로 캐싱하거나 빌드 시 프리렌더링을 시도할 수 있습니다.
- 하지만 SSE처럼 요청마다 새로운 스트림을 만들어야 하는 API는 캐싱되면 안 됩니다.
- 이 옵션을 주면 항상 동적으로 실행되어, 클라이언트의 요청마다 즉시 서버 코드가 돌도록 강제합니다.
  :::

<br />

그리고 Event Stream을 열어, 해당 API의 응답으로 보낼 수 있게끔 추가했습니다.

```ts
const stream = new ReadableStream({
  start(controller) {
    const close = () => {
      try {
        controller.close();
      } catch {}
    };

    req.signal.addEventListener('abort', close);
  },
});

return new Response(stream, {
  headers: {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'X-Accel-Buffering': 'no',
    Connection: 'keep-alive',
  },
});
```

<br />

마지막으로 chokidar를 사용하여, 마크다운 파일 변경 발생 시 SSE로 알림을 보내도록 추가했습니다.

```ts
const { default: chokidar } = await import('chokidar');
const encoder = new TextEncoder();

const stream = new ReadableStream({
  start(controller) {
    const send = () => {
      controller.enqueue(encoder.encode('data: change\n\n'));
    };

    const dir = path.resolve(process.cwd(), 'public', 'posts');
    const watcher = chokidar.watch(dir, {
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 50 }
    });

    watcher.on('change', send);

    const close = async () => {
      await watcher.close().catch(() => {});
      ...
    }
    ...
  },
});
```

<br />

총 정리 코드입니다.

```ts
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return new Response(null, { status: 204 });
  }

  const { default: chokidar } = await import('chokidar');
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const send = () => controller.enqueue(encoder.encode('data: change\n\n'));

      const dir = path.resolve(process.cwd(), 'public', 'posts');
      const watcher = chokidar.watch(dir, {
        ignoreInitial: true,
        awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 50 },
      });

      watcher.on('change', send);

      const close = async () => {
        await watcher.close().catch(() => {});
        try {
          controller.close();
        } catch {}
      };

      req.signal.addEventListener('abort', close);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
      Connection: 'keep-alive',
    },
  });
}
```

<br />

#### 클라이언트 컴포넌트 구현

그럼 위처럼 만든 API를 연결할 클라이언트도 필요하겠죠?

<br />

간단하게 API를 연결하고 서버 드리븐 이벤트를 받는 역할을 수행하는 클라이언트용 컴포넌트를 만들어 레이아웃에 적용했습니다.

```tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MarkdownHMRClient = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const handleMessage = () => {
      router.refresh();
    };

    const eventSource = new EventSource('/api/설정한-route');
    eventSource.addEventListener('message', handleMessage);

    return () => {
      eventSource.removeEventListener('message', handleMessage);
      eventSource.close();
    };
  }, [router]);

  return null;
};

export default MarkdownHMRClient;

// layout.tsx
return (
  ...
  {process.env.NODE_ENV === 'development' && <MarkdownHMRClient />}
);
```

<br />

#### 마무리

이렇게 해서 원하는 마크다운 HMR 동작을 구현하고 블로그에 적용했습니다. 지금 작성하는 글도 바로바로 결과를 확인할 수 있어, 확실히 편해졌습니다. (Hooray!)

<br />

이번 경험을 통해 HMR이 어떤 구조적 흐름으로 동작하는 지 원리를 알고 직접 체감했습니다.
비록 모듈 단위 교체는 아니지만, SSE와 chokidar를 조합해서 '즉시 확인' 흐름을 직접 구현해볼 수 있었습니다.
무엇보다 “내가 쓰는 개발 환경을 직접 뜯어보고 개선해보는 경험”이 가장 의미 있었습니다.

<br />

나중에 좀 더 경험과 내공이 쌓인다면 더 최적화되고 세밀한 방식으로 시도해보고 싶네요 :)
