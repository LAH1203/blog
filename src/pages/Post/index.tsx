import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Utterances from '@/components/Utterances';
import { parsePost } from '@/utils/post';

import Header from './Header';
import Navigator from './Navigator';
import styles from './index.scss';

const minUnit = 2000;

const Post = () => {
  const { id } = useParams();

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

  useEffect(() => {
    const titleEl = document.querySelector('title');

    if (!titleEl) return;

    titleEl.innerText = title;
  }, [title]);

  return (
    <div className={styles.container}>
      <Header
        title={title}
        date={date}
        minutes={
          content.length < minUnit ? 1 : Math.round(content.length / minUnit)
        }
      />
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Utterances />
      <Navigator id={Number(id)} />
    </div>
  );
};

export default Post;
