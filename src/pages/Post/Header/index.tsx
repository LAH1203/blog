import calendar from '@/assets/calendar.svg';

import styles from './index.scss';

interface HeaderProps {
  title: string;
  date: string;
}

function Header({ title, date }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <hr />
      <div className={styles.date}>
        <img src={calendar} alt="달력 이모지" />
        {date}
      </div>
    </div>
  );
}

export default Header;
