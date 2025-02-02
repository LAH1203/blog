import { readFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { PostMetadata } from '@/types/post';

type Metadata = Omit<PostMetadata, 'category' | 'fileName'>;

const readMetadata = (
  category: PostMetadata['category'],
  fileName: PostMetadata['fileName'],
): PostMetadata => {
  const post = readFileSync(
    path.resolve(process.cwd(), 'public', 'posts', category, fileName),
    'utf-8',
  );

  const metadata: Metadata = matter(post).data as Metadata;

  return {
    category,
    fileName,
    ...metadata,
  };
};

export default readMetadata;
