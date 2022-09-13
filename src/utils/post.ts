import { postsLength } from '@/constants/data';
import { Post } from '@/types/data';

const parsePost = (id: Post['id'], post: string) => {
  const [, description, ...postContent] = post.split('---');
  const [, title, createDate] = description.replaceAll('---', '').split('\n');

  return {
    id,
    title: title.replace('title: ', ''),
    createDate: createDate.replace('createDate: ', ''),
    content: postContent.join('---'),
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
