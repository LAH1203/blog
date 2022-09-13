import { useRecoilValue } from 'recoil';

import styles from './index.scss';

import Header from '@/components/Header';
import { modeState } from '@/recoil/condition';

interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  const mode = useRecoilValue(modeState);

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
