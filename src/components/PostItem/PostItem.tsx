import { PostMetadata } from '@/types/post';

interface PostItemProps {
  item: PostMetadata;
}

const PostItem = ({ item }: PostItemProps) => {
  return (
    <a href={`/post/${item.category}/${item.fileName}`}>
      <li className="flex w-full flex-col gap-12 rounded-md border-[0.5px] border-[#DFE9DD] bg-[#F6F9F6] p-6 transition-all duration-200 hover:scale-[1.01]">
        <span className="font-medium text-[#4B5945]">{item.title}</span>
        <div className="flex justify-between text-xs">
          <span className="rounded-2xl bg-[#F0EAAC] px-2 py-1 font-medium text-white">
            {item.category}
          </span>
          <span className="text-[#4B5945]">{item.date.toLocaleDateString()}</span>
        </div>
      </li>
    </a>
  );
};

export default PostItem;
