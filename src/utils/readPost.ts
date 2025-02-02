import { readFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Post } from '@/types/post';

import readMetadata from './readMetadata';

const readPost = async (category: string, fileName: string): Promise<Post | null> => {
  const metadata = readMetadata(category, fileName);

  try {
    const post = readFileSync(
      path.resolve(process.cwd(), 'public', 'posts', category, fileName),
      'utf-8',
    );

    const { content: contentStr } = matter(post);
    const content = await remark().use(html).process(contentStr);

    return {
      content: content.toString(),
      ...metadata,
    };
  } catch {
    return null;
  }
};

export default readPost;
