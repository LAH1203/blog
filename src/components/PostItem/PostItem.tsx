import { PostMetadata } from '@/types/post';
import Image from 'next/image';

interface PostItemProps {
  item: PostMetadata;
}

const PostItem = ({ item }: PostItemProps) => {
  return (
    <a
      href={`/post/${item.category}/${item.fileName.split('.')[0]}`}
      className="h-full xs:max-w-[320px] max-w-full w-full"
    >
      <li className="flex flex-col items-center w-full h-full rounded-xl bg-white transition-all duration-200 hover:scale-[1.01] shadow-[0_0_12px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_0_12px_4px_rgba(0,0,0,0.07)]">
        <div className="relative w-full h-[100px]">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.title}
              className="rounded-t-xl object-cover bg-gray-200"
              sizes="100% 100px"
              fill
            />
          ) : (
            <div className="flex items-center justify-center rounded-t-xl object-cover bg-[#F6F9F6] size-full text-6xl">
              🐢
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 w-full px-6 pt-4 pb-6">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[#4B5945]">{item.title}</span>
            <span className="text-[#4B5945] text-sm">{item.description}</span>
          </div>
        </div>
      </li>
    </a>
  );
};

export default PostItem;
