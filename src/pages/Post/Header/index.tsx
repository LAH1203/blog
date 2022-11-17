import calendar from '@/assets/calendar.svg';

import styles from './index.scss';

interface HeaderProps {
  title: string;
  date: string;
}

function Header({ title, date }: HeaderProps) {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <hr />
      <div className={styles.date}>
        <img src={calendar} alt="달력 이모지" />
        {date}
      </div>
    </section>
  );
}

export default Header;
