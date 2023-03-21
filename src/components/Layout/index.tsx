import Header from '@/components/Header';

import styles from './index.scss';

interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export default Layout;
