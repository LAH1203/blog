import PostItem from '@/components/PostItem/PostItem';
import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

const Home = () => {
  const posts = readAllPostsMetadata();

  return (
    <div className="h-full">
      <ul className="grid xl-large:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4 last:pb-12 max-xs:first:pt-4 xs:w-fit w-full">
        {posts.map((post, idx) => (
          <PostItem item={post} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
