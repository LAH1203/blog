import { useEffect, useState } from 'react';

import Profile from './Profile';
import WritingItem from './WritingItem';

import { Post } from '@/types/data';
import { idDesc } from '@/utils/compare';
import { getAllPosts } from '@/utils/post';

import styles from './index.scss';

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
      {posts.sort(idDesc).map(({ id, title, date }) => (
        <WritingItem id={id} title={title} date={date} key={id} />
      ))}
    </div>
  );
}

export default Home;
