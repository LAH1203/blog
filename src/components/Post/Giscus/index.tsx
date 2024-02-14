'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';

export default function Giscus() {
  const ref = useRef<HTMLElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('data-repo', 'LAH1203/blog');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOH_I_KQ');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOH_I_Kc4CX4IK');
    scriptElem.setAttribute('data-mapping', 'title');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'top');
    scriptElem.setAttribute('data-theme', 'noborder_light');
    scriptElem.setAttribute('data-lang', 'en');
    scriptElem.setAttribute('data-loading', 'lazy');
    scriptElem.setAttribute('crossorigin', 'anonymous');
    scriptElem.setAttribute('async', 'true');

    ref.current.appendChild(scriptElem);
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { term: pathname } } },
      'https://giscus.app',
    );
  }, [pathname]);

  return <section ref={ref} />;
}
