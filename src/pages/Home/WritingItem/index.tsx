import { useNavigate } from 'react-router-dom';

import calendar from '@/assets/calendar.svg';

import styles from './index.scss';

interface WritingItemProps {
  id: number;
  title: string;
  date: string;
}

function WritingItem({ id, title, date }: WritingItemProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(`/post/${id}`)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <img src={calendar} />
        {date}
      </div>
    </div>
  );
}

export default WritingItem;
