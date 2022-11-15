import { createRef, useContext, useLayoutEffect } from 'react';

import { ModeContext } from '@/contexts';

function Utterances() {
  const { mode } = useContext(ModeContext);

  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'LAH1203/blog',
      'issue-term': 'pathname',
      theme: mode === 'light' ? 'github-light' : 'github-dark',
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
