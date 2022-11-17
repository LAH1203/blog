import { useNavigate } from 'react-router-dom';

import calendar from '@/assets/calendar.svg';

import styles from './index.scss';

interface WritingItemProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

function WritingItem({ id, title, description, date }: WritingItemProps) {
  const navigate = useNavigate();

  return (
    <section
      className={styles.container}
      onClick={() => navigate(`/post/${id}`)}
    >
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <p className={styles.date}>
        <img src={calendar} />
        {date}
      </p>
    </section>
  );
}

export default WritingItem;
