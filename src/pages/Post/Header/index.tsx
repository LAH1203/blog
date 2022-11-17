import Hits from '@/components/Hits';

import calendar from '@/assets/calendar.svg';
import { Post } from '@/types/data';

import styles from './index.scss';

interface HeaderProps extends Pick<Post, 'title' | 'date'> {
  minutes: number;
}

function Header({ title, date, minutes }: HeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles['main-container']}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.date}>
          <img src={calendar} alt="달력 이모지" />
          {date}
        </div>
      </div>
      <hr />
      <div className={styles.description}>
        <Hits />
        <p className={styles.minute}>{minutes} min read</p>
      </div>
    </section>
  );
}

export default Header;
