import { useNavigate } from 'react-router-dom';

import { postsLength } from '@/constants/data';

import styles from './index.scss';

interface NavigatorProps {
  id: number;
}

function Navigator({ id }: NavigatorProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.navigator}>
      <div onClick={() => navigate(`/post/${id - 1}`)}>
        {id > 1 ? 'Prev' : ''}
      </div>
      <div onClick={() => navigate(`/post/${id + 1}`)}>
        {id < postsLength ? 'Next' : ''}
      </div>
    </div>
  );
}

export default Navigator;
