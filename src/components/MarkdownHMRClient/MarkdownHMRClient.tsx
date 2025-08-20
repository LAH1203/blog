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

    const eventSource = new EventSource('/api/md-hmr');
    eventSource.addEventListener('message', handleMessage);

    return () => {
      eventSource.removeEventListener('message', handleMessage);
      eventSource.close();
    };
  }, [router]);

  return null;
};

export default MarkdownHMRClient;
