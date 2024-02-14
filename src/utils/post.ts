import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import fs from 'fs';
import path from 'path';

import { Post, PostMetadata } from '@/types/data';

type Metadata = Omit<PostMetadata, 'id' | 'category'>;

const getMetadata = (
  id: Post['id'],
  category: string,
  postContent: string,
): PostMetadata => {
  const metadata: Metadata = matter(postContent).data as Metadata;

  return { id, category, ...metadata };
};

const readCategoryPostsMetadata = (
  category: Post['category'],
): PostMetadata[] => {
  return fs
    .readdirSync(path.resolve(process.cwd(), 'public', 'posts', category))
    .map(fileName => {
      const post = fs.readFileSync(
        path.resolve(process.cwd(), 'public', 'posts', category, fileName),
        'utf-8',
      );
      const id = Number(fileName.split('.md')[0]);

      return getMetadata(id, category, post);
    });
};

const readAllPostsMetadata = (): PostMetadata[] => {
  const categories: string[] = fs.readdirSync(
    path.resolve(process.cwd(), 'public', 'posts'),
  );

  return categories.reduce<PostMetadata[]>((posts, category) => {
    const files: PostMetadata[] = readCategoryPostsMetadata(category);

    return [...posts, ...files];
  }, []);
};

const getPostMetadata = (id: Post['id']): PostMetadata | undefined => {
  return readAllPostsMetadata().find(metadata => metadata.id === id);
};

const getPostContent = async (
  id: Post['id'],
  category: Post['category'],
): Promise<string> => {
  const post = fs.readFileSync(
    path.resolve(process.cwd(), 'public', 'posts', category, `${id}.md`),
    'utf-8',
  );
  const { content: contentStr } = matter(post);

  const content = await remark().use(html).process(contentStr);

  return content.toString();
};

const readPost = async (
  id: Post['id'],
): Promise<{ metadata: Metadata; content: string } | ''> => {
  const postMetadata = getPostMetadata(id);
  if (!postMetadata) return '';

  const { category } = postMetadata;

  return {
    metadata: postMetadata,
    content: await getPostContent(id, category),
  };
};

export { readCategoryPostsMetadata, readAllPostsMetadata, readPost };
