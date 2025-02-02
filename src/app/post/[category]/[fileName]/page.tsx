import { notFound } from 'next/navigation';

import Article from '@/components/Article/Article';
import readPost from '@/utils/readPost';

import 'highlight.js/styles/stackoverflow-light.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';

const Post = async ({ params }: { params: Promise<{ category: string; fileName: string }> }) => {
  const metadata = await params;
  const category = decodeURIComponent(metadata.category);
  const fileName = decodeURIComponent(metadata.fileName);
  const post = await readPost(category, fileName);

  if (!category || !fileName || !post) {
    notFound();
  }

  const { title, date, content } = post;

  return (
    <div className="flex flex-col gap-8 xs:px-8 px-2 pb-12">
      <section className="flex flex-col gap-1 border-b border-[#B2C9AD] pb-4 max-xs:pt-4">
        <h1 className="text-xl font-medium leading-8">{title}</h1>
        <div className="flex items-center gap-2 text-sm">
          <span className="whitespace-nowrap text-[#4B5945]">{date.toLocaleDateString()}</span>
          <span className="w-fit rounded-2xl bg-[#F0EAAC] px-2 py-1 font-medium text-white">
            {category}
          </span>
        </div>
      </section>
      <Article content={content} />
    </div>
  );
};

export default Post;
