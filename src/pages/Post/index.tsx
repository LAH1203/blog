import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Navigator from './Navigator';
import Utterances from '@/components/Utterances';

import { parsePost } from '@/utils/post';

import styles from './index.scss';

const minUnit = 2000;

function Post() {
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
}

export default Post;
