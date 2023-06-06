import { useEffect, useState } from 'react';

import styles from '@/pages/Post/index.scss';
import { parsePost } from '@/utils/post';
import { Post } from '@/types/data';

import useSnackbar from './useSnackbar';

type usePostProps = {
  id: Pick<Post, 'id'>;
} & ReturnType<typeof useSnackbar>;

const usePost = ({ id, isSnackbarShowing, showSnackbar }: usePostProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    window.scroll(0, 0);

    import(`@/posts/${id}.md`).then(postModule => {
      const post = parsePost(Number(id), postModule.default);

      setTitle(post.title);
      setDate(post.date);
      setContent(post.content);
    });
  }, [id]);

  useEffect(() => {
    const titleEl = document.querySelector('title');

    if (!titleEl) return;

    titleEl.innerText = title;
  }, [title]);

  useEffect(() => {
    const codes = document.querySelectorAll('code');

    codes.forEach(code => {
      const button = document.createElement('button');

      button.innerText = 'copy';
      button.type = 'button';
      button.className = styles['copy-button'];
      button.addEventListener('click', () => {
        const codeContent = code.innerText.split('\n').slice(0, -2).join('\n');

        navigator.clipboard.writeText(codeContent);

        if (isSnackbarShowing) return;

        showSnackbar();
      });

      code.appendChild(button);
    });
  }, [content]);

  return { title, content, date };
};

export default usePost;
