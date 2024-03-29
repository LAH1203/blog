'use client';

import { useEffect } from 'react';

import hljs from 'highlight.js';

import 'highlight.js/styles/stackoverflow-light.css';
import './index.scss';

interface ArticleProps {
  content: string;
}

const Article = ({ content }: ArticleProps) => {
  useEffect(() => {
    hljs.configure({
      languages: [
        'vim',
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'html',
        'css',
        'scss',
      ],
    });
    hljs.highlightAll();
  }, []);

  return (
    <article
      dangerouslySetInnerHTML={{ __html: content }}
      className="post-content scrollbar-hide"
    />
  );
};

export default Article;
