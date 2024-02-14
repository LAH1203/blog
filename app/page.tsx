import fs from 'fs';

import WritingItem from '@/components/Home/WritingItem';
import { PostMetadata } from '@/types/data';
import { idDesc } from '@/utils/compare';
import { readAllPostsMetadata, readCategoryPostsMetadata } from '@/utils/post';
import Link from 'next/link';

interface HomeProps {
  searchParams?: { category?: string };
}

const Home = ({ searchParams }: HomeProps) => {
  const selectedCategory = searchParams?.category || '';

  const categories: string[] = fs.readdirSync('public/posts');
  const posts: PostMetadata[] = categories.includes(selectedCategory)
    ? readCategoryPostsMetadata(selectedCategory)
    : readAllPostsMetadata();

  return (
    <div className="flex flex-col gap-[4.8rem] w-[99%] my-4">
      <div className="flex gap-[1.5rem] overflow-x-scroll px-[1.5rem] scrollbar-hide">
        {categories.map(category => (
          <Link
            href={selectedCategory !== category ? `?category=${category}` : '/'}
            key={category}
          >
            <p
              className={`bg-beige-300 hover:bg-beige-500 text-white rounded-[8px] px-2 whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                selectedCategory === category ? 'bg-beige-500' : ''
              }`}
            >
              {category}
            </p>
          </Link>
        ))}
      </div>
      {posts.sort(idDesc).map(information => (
        <WritingItem {...information} key={information.id} />
      ))}
    </div>
  );
};

export default Home;
