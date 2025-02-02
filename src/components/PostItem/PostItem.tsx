import { PostMetadata } from '@/types/post';
import Image from 'next/image';

interface PostItemProps {
  item: PostMetadata;
}

const PostItem = ({ item }: PostItemProps) => {
  return (
    <a
      href={`/post/${item.category}/${item.fileName}`}
      className="h-full xs:max-w-[430px] max-w-full w-full"
    >
      <li className="flex flex-col items-center w-full h-full gap-8 rounded-md border-[0.5px] border-[#DFE9DD] bg-[#F6F9F6] p-6 transition-all duration-200 hover:scale-[1.01]">
        <div className="relative w-full h-[100px]">
          <Image
            src={item.thumbnail}
            alt={`${item.title} thumbnail`}
            placeholder="blur"
            blurDataURL="/images/blur.webp"
            className="rounded-md object-cover"
            fill
          />
        </div>
        <div className="flex flex-col justify-between gap-4 w-full">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-[#4B5945]">{item.title}</span>
            <span className="text-[#4B5945] text-sm">{item.description}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="rounded-2xl bg-[#F0EAAC] px-2 py-1 font-medium text-white">
              {item.category}
            </span>
            <span className="text-[#4B5945]">{item.date.toLocaleDateString()}</span>
          </div>
        </div>
      </li>
    </a>
  );
};

export default PostItem;
