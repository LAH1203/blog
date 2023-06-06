import { useNavigate } from 'react-router-dom';

import arrow from '@/assets/arrow.svg';
import { Post } from '@/types/data';
import { getPostLength } from '@/utils/post';

import styles from './index.scss';

const Navigator = ({ id }: Pick<Post, 'id'>) => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigator}>
      <div onClick={() => navigate(`/post/${id - 1}`)}>
        {id > 1 && <img src={arrow} alt="이전글" className={styles.arrow} />}
      </div>
      <div onClick={() => navigate(`/post/${id + 1}`)}>
        {id < getPostLength() && (
          <img
            src={arrow}
            alt="다음글"
            className={`${styles.arrow} ${styles.next}`}
          />
        )}
      </div>
    </div>
  );
};

export default Navigator;
