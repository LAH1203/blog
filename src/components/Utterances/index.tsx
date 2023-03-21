import { createRef, useLayoutEffect } from 'react';

function Utterances() {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'LAH1203/blog',
      'issue-term': 'pathname',
      theme: 'preferred-color-scheme',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current!.appendChild(utterances);
  }, []);

  return <div ref={containerRef} />;
}

export default Utterances;
