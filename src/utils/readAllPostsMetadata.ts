import { readdirSync } from 'fs';
import path from 'path';

import { Post, PostMetadata } from '@/types/post';

const readCategoryPostsMetadata = (category: Post['category']): PostMetadata[] => {
  return readdirSync(path.resolve(process.cwd(), 'public', 'posts', category)).map(fileName => {
    const regex = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
    const match = fileName.match(regex);

    const [, dateString, rawTitle] = match!;

    const date = new Date(dateString);
    const title = rawTitle.replace(/-/g, ' ');

    return { category, date, title };
  });
};

const readAllPostsMetadata = (): PostMetadata[] => {
  const categories: string[] = readdirSync(path.resolve(process.cwd(), 'public', 'posts'));

  return categories.reduce<PostMetadata[]>((posts, category) => {
    const files: PostMetadata[] = readCategoryPostsMetadata(category);

    return [...posts, ...files];
  }, []);
};

export default readAllPostsMetadata;
