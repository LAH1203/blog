import { readdirSync } from 'fs';
import path from 'path';

import { PostMetadata } from '@/types/post';

import readMetadata from './readMetadata';

const readCategoryPostsMetadata = (category: PostMetadata['category']): PostMetadata[] => {
  return readdirSync(path.resolve(process.cwd(), 'public', 'posts', category), {
    withFileTypes: true,
  })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => {
      const metadata = readMetadata(category, dirent.name);

      return metadata;
    });
};

const readAllPostsMetadata = (): PostMetadata[] => {
  const categories: string[] = readdirSync(path.resolve(process.cwd(), 'public', 'posts'), {
    withFileTypes: true,
  })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return categories
    .reduce<PostMetadata[]>((posts, category) => {
      const files: PostMetadata[] = readCategoryPostsMetadata(category);

      return [...posts, ...files];
    }, [])
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export default readAllPostsMetadata;
