---
title: HLS, DASH 스트리밍 기법
description: 비디오, 오디오 다 가능!
date: 2026-01-26
thumbnail: /thumbnails/hls-dash-streaming.webp
---

기본적으로 브라우저에서 미디어를 재생하는 방법은 간단합니다.

```html
<video src="video.mp4"></video>
<!-- or -->
<audio src="audio.mp3"></audio>
```

파일 경로를 넣으면 브라우저가 알아서 재생해주는데, 별도의 설정이 없다면 자동으로 `Progressive Download`로 다운 받아 재생하는 방식을 사용합니다.
`Progressive Download`는 파일 청크를 나눠 앞에서부터 순차적으로 다운로드하면서 재생하는 방식입니다.

<br />

보통 짧은 영상이나 단순한 오디오 재생에는 이 방식으로 충분합니다.
그러나 이 방식으로는 부족한 상황이 있습니다.

<br />

가장 흔한 예시는 네트워크가 느릴 때인데요. 네트워크가 느려지면 버퍼링이 걸리고, 고화질 영상인데 사용자 환경이 좋지 않으면 재생 경험이 원활하게 이뤄지지 않습니다.
그렇기 때문에 그럴 때는 화질이나 음질을 상황에 맞게 조절하는 등 대용량 미디어를 안정적으로 전달하는 다른 방법이 필요합니다.

<br />

그래서 나온 접근 방식이 바로 `Adaptive Bitrate Streaming`입니다.

<br />

### Adaptive Bitrate Streaming

`Adaptive Bitrate Streaming`은 비트레이트(화질, 음질 등)를 유동적으로 조절하는 스트리밍 방식입니다.
네트워크 상황이 좋으면 고화질로, 좋지 않으면 저화질로 자동 전환되는 구조입니다.
아마 대부분 유튜브나 넷플릭스에서 영상을 보던 중 네트워크 상황에 따라 화질이 자동으로 바뀌는 경험이 있을텐데, 그 동작이 이 기법에 해당합니다.

<br />

이렇게 네트워크에 따라 유동적으로 비트레이트를 조절하는 방법이 가능한 건 **세그먼트 기반 전송**으로 구현되었기 때문입니다.

<br />

`Adaptive Bitrate Streaming` 방식에서는 이전의 Progressive Download 방법처럼 하나의 미디어를 통째로 전달하는 것이 아니라, 미디어를 몇 초 단위의 작은 세그먼트로 쪼개서 전달합니다.
또한 같은 구간을 여러 비트레이트로 분리해서 준비해두어 상황에 따라 저화질 혹은 고화질로 호출해서 사용할 수 있도록 준비가 필요합니다.

<br />

그리고 그 세그먼트들이 어디 있는지, 어떤 비트레이트로 존재하는지 알려주는 파일이 있는데, 이를 **manifest**라고 부릅니다.
플레이어는 매니페스트를 읽고 네트워크 상태에 따라 다음 세그먼트를 판단하여 호출하는 역할을 합니다.

<br />

이 `Adaptive Bitrate Streaming`을 구현한 대표적인 프로토콜이 두 가지가 있는데요.
Apple이 만든 HLS, 그리고 국제 표준으로 제정된 DASH입니다.

<br />

### HLS (HTTP Live Streaming)

HLS는 Apple이 2009년에 만든 프로토콜입니다.
아이폰 3GS 출시와 함께 등장했는데, 당시 모바일 환경에서 안정적으로 영상을 스트리밍하기 위해 Apple이 내놓은 해결책입니다.

<br />

HLS는 매니페스트 파일로 `.m3u8` 확장자를 사용합니다.

```
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=854x480
480p.m3u8
```

각 화질별로 또 다른 m3u8 파일이 있고, 거기에 실제 세그먼트 파일 목록이 들어있습니다.
세그먼트는 보통 `.ts`(MPEG-2 Transport Stream) 포맷을 사용하는데, 최근에는 `.m4s`(fMP4) 형태도 지원합니다.

<br />

HLS의 가장 큰 장점은 **호환성**입니다.
iOS Safari에서 네이티브로 지원하기 때문에 별도 라이브러리 없이 `<video src="video.m3u8">` 같은 형태로도 재생이 됩니다.
iOS Safari가 아닌 다른 브라우저에서는 hls.js 같은 라이브러리를 사용할 수 있고요.

<br />

단점은 **코덱 선택이 제한적**이라는 점입니다.
Apple이 지원하는 코덱 위주로 사용할 수 있어 DASH에 비해 유연성이 다소 떨어지는 편입니다.

<!-- 하지만 단점은 **지연 시간**입니다.
기본적으로 세그먼트 단위가 6초 정도로 다소 긴 편이기 때문에 라이브 방송 같은 곳에서는 체감될 정도의 딜레이가 존재합니다.
이를 개선한 `LL-HLS (Low-Latency HLS)`가 나오긴 했지만, 일반 HLS만큼 널리 쓰이지는 않습니다.
(라이브 방송 같은 곳은 저지연이 중요하기 때문에 `WebRTC`도 많이 사용하는 것 같습니다 🙄) -->

<br />

### DASH (Dynamic Adaptive Streaming over HTTP)

HLS가 있긴 하지만 어디까지나 Apple의 독자 규격이다 보니, 업계에서는 특정 회사에 종속되지 않은 표준이 필요하다는 목소리가 나왔습니다.
그래서 Microsoft, Netflix, Google 등 여러 기업이 모여 국제 표준을 만들게 되었는데, 그것이 바로 2012년에 ISO 표준 (ISO/IEC 23009-1) 으로 제정된 DASH (aka. MPEG-DASH) 입니다.

<br />

DASH는 매니페스트 파일로 `.mpd` 확장자를 사용합니다. (XML 형식)

```xml
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" type="static">
  <Period>
    <AdaptationSet mimeType="video/mp4">
      <Representation bandwidth="1400000" width="1280" height="720">
        <BaseURL>720p/</BaseURL>
      </Representation>
      <Representation bandwidth="800000" width="854" height="480">
        <BaseURL>480p/</BaseURL>
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

HLS의 m3u8보다 구조가 복잡해 보이지만, 그만큼 유연합니다.
코덱 선택의 자유도가 높고, 다양한 DRM 시스템과의 호환성도 좋습니다. 이는 대형 스트리밍 서비스들이 DASH를 선호하는 이유 중 하나입니다.

<br />

단점은 HLS처럼 네이티브 지원은 불가능하다는 점입니다.
`<video src="video.mpd">` 같은 형태로의 재생이 불가능하며, 재생을 위해서는 dash.js 같은 라이브러리가 필수입니다.
(iOS 17 이전에는 라이브러리를 통한 재생도 불가능했으나, iOS 17부터 MSE를 지원하면서 라이브러리를 통한 재생은 가능해졌습니다.)
