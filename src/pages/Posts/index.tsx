import { useEffect, useState } from 'react';

import WritingItem from '../Posts/WritingItem';

import { posts as postData } from '@/constants/data';
import { Post } from '@/types/data';
import { idDesc } from '@/utils/compare';
import usePost from '@/hooks/usePost';

import styles from './index.scss';

const categories = Object.keys(postData) as Array<keyof typeof postData>;

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof postData | ''
  >('');

  const { getAllPosts, getPostsInCategory } = usePost();

  useEffect(() => {
    resetPosts();
  }, []);

  const resetPosts = () => {
    setPosts([]);
    setSelectedCategory('');

    getAllPosts().forEach(postPromise => {
      postPromise.then(post => {
        setPosts(prevPosts => [...prevPosts, post]);
      });
    });
  };

  const findPosts = (category: keyof typeof postData) => () => {
    if (selectedCategory === category) {
      resetPosts();

      return;
    }

    setPosts([]);
    setSelectedCategory(category);

    getPostsInCategory(category).forEach(postPromise => {
      postPromise.then(post => {
        setPosts(prevPosts => [...prevPosts, post]);
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles['category-container']}>
        {categories.map(category => (
          <p
            className={`${styles.category} ${
              selectedCategory === category ? styles.selected : ''
            }`}
            onClick={findPosts(category)}
            key={category}
          >
            {category}
          </p>
        ))}
      </div>
      {posts.sort(idDesc).map(({ id, title, description, date }) => (
        <WritingItem
          id={id}
          title={title}
          description={description}
          date={date}
          key={id}
        />
      ))}
    </div>
  );
};

export default Posts;
