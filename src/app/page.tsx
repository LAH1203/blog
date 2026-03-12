import PostItem from '@/components/PostItem/PostItem';
import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

const Home = () => {
  const posts = readAllPostsMetadata();

  return (
    <div className="flex flex-col max-xs:items-end gap-8">
      <ul className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 w-full">
        {posts.map((post, idx) => (
          <PostItem item={post} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
