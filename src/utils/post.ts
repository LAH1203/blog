import { postsLength } from '@/constants/data';
import { Post } from '@/types/data';

const parsePost = (id: Post['id'], post: string) => {
  const [, description, ...postContent] = post.split('<hr>');
  const [title, date] = description.split('date: ');

  return {
    id,
    title: title.split('<p>title: ')[1],
    date: date.replace('date: ', '').replace('</p>', ''),
    content: postContent.join('<hr>'),
  };
};

const getAllPosts = () => {
  return Array.from({ length: postsLength }, (_, i) => postsLength - i).map(
    id => {
      return import(`@/posts/${id}.md`).then(postModule =>
        parsePost(id, postModule.default),
      );
    },
  );
};

export { parsePost, getAllPosts };
