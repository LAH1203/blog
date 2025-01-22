import { PostMetadata } from '@/types/post';

interface PostItemProps {
  item: PostMetadata;
}

const PostItem = ({ item }: PostItemProps) => {
  console.log(item);

  return <div className="w-full rounded-md bg-[#F6F9F6]">PostItem</div>;
};

export default PostItem;
