import { useContext } from 'react';

import Header from '@/components/Header';

import { ModeContext } from '@/contexts';

import styles from './index.scss';

interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  const { mode } = useContext(ModeContext);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div
        className={`${styles.content} ${
          mode === 'dark' ? styles.darkMode : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
