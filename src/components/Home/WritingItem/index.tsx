import { PostMetadata } from '@/types/data';
import Link from 'next/link';

const WritingItem = ({
  id,
  title,
  description,
  category,
  date,
}: PostMetadata) => {
  return (
    <Link href={`/post/${id}`} className="w-full hover:text-black">
      <section className="flex flex-col gap-2 px-6 py-2 transition-all duration-300 hover:border-l-4 hover:border-solid hover:border-beige-600">
        <h2 className="text-[1.3rem] font-black">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-beige-600 font-semibold whitespace-nowrap">
            {category}
          </p>
          <p className="flex justify-end gap-[5px] text-[0.9rem] text-gray-400 whitespace-nowrap">
            {date}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default WritingItem;
