import { Post } from '@/types/data';

const parsePost = (id: Post['id'], post: string): Post => {
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

export { parsePost };
