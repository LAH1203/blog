import React, { useContext, useState } from 'react';

import Header from '@/components/Header';

import { ModeContext } from '@/contexts';

import styles from './index.scss';

interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  const { mode } = useContext(ModeContext);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const scrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <main
        className={`${styles.content} ${
          mode === 'dark' ? styles.darkMode : ''
        }`}
        onScroll={scrollEvent}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
