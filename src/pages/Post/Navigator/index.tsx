import { useNavigate } from 'react-router-dom';

import { postsLength } from '@/constants/data';
import { Post } from '@/types/data';

import styles from './index.scss';

function Navigator({ id }: Pick<Post, 'id'>) {
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
