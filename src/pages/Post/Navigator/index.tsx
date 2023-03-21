import { useNavigate } from 'react-router-dom';

import { Post } from '@/types/data';
import usePost from '@/hooks/usePost';

import styles from './index.scss';

const Navigator = ({ id }: Pick<Post, 'id'>) => {
  const navigate = useNavigate();

  const { getPostLength } = usePost();

  return (
    <div className={styles.navigator}>
      <div onClick={() => navigate(`/post/${id - 1}`)}>
        {id > 1 ? 'Prev' : ''}
      </div>
      <div onClick={() => navigate(`/post/${id + 1}`)}>
        {id < getPostLength() ? 'Next' : ''}
      </div>
    </div>
  );
};

export default Navigator;
