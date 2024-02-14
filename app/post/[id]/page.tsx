import readingTime from 'reading-time';

import Article from '@/components/Post/Article';
import { readPost } from '@/utils/post';
import dynamic from 'next/dynamic';

const Giscus = dynamic(() => import('@/components/Post/Giscus'), {
  ssr: false,
});

interface PostProps {
  params: { id: string };
}

const Post = async ({ params }: PostProps) => {
  const id = params?.id;
  const info = await readPost(Number(id));

  if (!id || !info) {
    return {
      notFound: true,
    };
  }

  const {
    metadata: { title, date },
    content,
  } = info;
  const { minutes } = readingTime(info.content, {
    wordsPerMinute: 600,
  });

  return (
    <div className="flex flex-col gap-6 w-[99%]">
      <section className="flex flex-col gap-2">
        <div className="flex flex-col items-end">
          <h1 className="text-[1.5rem] font-black leading-8 px-[2rem]">
            {title}
          </h1>
          <p className="text-gray-500 px-[2rem] whitespace-nowrap">{date}</p>
        </div>
        <hr />
        <p className="text-right text-gray-500 px-[2rem]">
          {Math.round(minutes)} min read.
        </p>
      </section>
      <Article content={content} />
      <Giscus />
    </div>
  );
};

export async function generateMetadata({ params }: PostProps) {
  const { id } = params;
  const info = await readPost(Number(id));

  if (!info) return {};

  const {
    metadata: { title, description },
  } = info;

  return {
    title,
    description,
    alternates: {
      canonical: `https://lah1203.netlify.app/post/${id}`,
    },
  };
}

export default Post;
