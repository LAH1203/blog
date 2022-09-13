import { useNavigate } from 'react-router-dom';

import styles from './index.scss';

interface WritingItemProps {
  id: number;
  title: string;
  content: string;
  createDate: string;
}

function WritingItem({ id, title, content, createDate }: WritingItemProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(`/post/${id}`)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.date}>{createDate}</div>
    </div>
  );
}

export default WritingItem;
