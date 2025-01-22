import { readdirSync } from 'fs';
import path from 'path';

import { PostMetadata } from '@/types/post';

import readMetadata from './readMetadata';

const readCategoryPostsMetadata = (category: PostMetadata['category']): PostMetadata[] => {
  return readdirSync(path.resolve(process.cwd(), 'public', 'posts', category)).map(fileName => {
    const { title, date } = readMetadata(fileName);

    return { category, date, title, fileName };
  });
};

const readAllPostsMetadata = (): PostMetadata[] => {
  const categories: string[] = readdirSync(path.resolve(process.cwd(), 'public', 'posts'));

  return categories
    .reduce<PostMetadata[]>((posts, category) => {
      const files: PostMetadata[] = readCategoryPostsMetadata(category);

      return [...posts, ...files];
    }, [])
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export default readAllPostsMetadata;
