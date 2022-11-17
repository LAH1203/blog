import { postsLength } from '@/constants/data';
import { Post } from '@/types/data';

const parsePost = (id: Post['id'], post: string) => {
  const [, postHeader, ...postContent] = post.split('<hr>');
  const [information, date] = postHeader.split('date: ');
  const [title, description] = information.split('description: ');

  return {
    id,
    title: title.split('<p>title: ')[1],
    description,
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
