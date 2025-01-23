import PostItem from '@/components/PostItem/PostItem';
import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

const Home = () => {
  const posts = readAllPostsMetadata();

  return (
    <div className="h-full">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {posts.map((post, idx) => (
          <PostItem item={post} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
