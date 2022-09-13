import { useEffect, useState } from 'react';

import styles from './index.scss';
import Profile from './Profile';
import WritingItem from './WritingItem';

import { Post } from '@/types/data';
import { idDesc } from '@/utils/compare';
import { getAllPosts } from '@/utils/post';

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts([]);

    getAllPosts().forEach(postPromise => {
      postPromise.then(post => {
        setPosts(prevPosts => [...prevPosts, post]);
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <Profile />
      <hr />
      {posts.sort(idDesc).map(({ id, title, content, createDate }) => (
        <WritingItem
          id={id}
          title={title}
          content={content}
          createDate={createDate}
          key={id}
        />
      ))}
    </div>
  );
}

export default Home;
