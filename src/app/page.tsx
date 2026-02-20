import PostItem from '@/components/PostItem/PostItem';
import Footer from '@/components/Sidebar/Footer';
import readAllPostsMetadata from '@/utils/readAllPostsMetadata';

const Home = () => {
  const posts = readAllPostsMetadata();

  return (
    <div className="flex flex-col max-xs:items-end gap-8 h-full max-xs:pt-8">
      <ul className="grid xl-large:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 xs:pb-12 xs:w-fit w-full">
        {posts.map((post, idx) => (
          <PostItem item={post} key={idx} />
        ))}
      </ul>
      <div className="xs:hidden block pb-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
