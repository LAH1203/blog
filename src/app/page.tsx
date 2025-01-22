import PostItem from '@/components/PostItem/PostItem';
import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

const Home = () => {
  const posts = readAllPostsMetadata();

  return (
    <div>
      {posts.map((post, idx) => (
        <PostItem item={post} key={idx} />
      ))}
    </div>
  );
};

export default Home;
