import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Navigator from './Navigator';

import { parsePost } from '@/utils/post';

import styles from './index.scss';
import Utterances from '@/components/Utterances';

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
    <main className={styles.container}>
      <Header title={title} date={date} />
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Utterances />
      <Navigator id={Number(id)} />
    </main>
  );
}

export default Post;
