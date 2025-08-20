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
