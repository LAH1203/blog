import { readFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { Post } from '@/types/post';

import readMetadata from './readMetadata';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkDirective from 'remark-directive';
import remarkCallout from '@microflash/remark-callout-directives';
import rehypeStringify from 'rehype-stringify';

const readPost = async (category: string, fileName: string): Promise<Post | null> => {
  const metadata = readMetadata(category, fileName);

  try {
    const post = readFileSync(
      path.resolve(process.cwd(), 'public', 'posts', category, fileName),
      'utf-8',
    );

    const { content: contentStr } = matter(post);
    const content = await unified()
      .use(remarkBreaks)
      .use(remarkGfm)
      .use(remarkParse)
      .use(remarkDirective)
      .use(remarkCallout)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .processSync(contentStr);

    return {
      content: content.toString(),
      ...metadata,
    };
  } catch {
    return null;
  }
};

export default readPost;
