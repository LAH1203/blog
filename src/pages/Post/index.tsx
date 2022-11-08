import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import calendar from '@/assets/calendar.svg';
import { postsLength } from '@/constants/data';
import { parsePost } from '@/utils/post';

import styles from './index.scss';

function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    window.scroll(0, 0);

    import(`@/posts/${id}.md`).then(postModule => {
      const post = parsePost(Number(id), postModule.default);

      setTitle(post.title);
      setDate(post.date);
      setContent(post.content);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.postHeader}>
        <div className={styles.title}>{title}</div>
        <hr />
        <div className={styles.date}>
          <img src={calendar} alt="달력 이모지" />
          {date}
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className={styles.navigator}>
        <div onClick={() => navigate(`/post/${Number(id) - 1}`)}>
          {Number(id) > 1 ? 'Prev' : ''}
        </div>
        <div onClick={() => navigate(`/post/${Number(id) + 1}`)}>
          {Number(id) < postsLength ? 'Next' : ''}
        </div>
      </div>
    </div>
  );
}

export default Blog;
