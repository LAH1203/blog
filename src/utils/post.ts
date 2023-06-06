import { posts } from '@/constants/data';
import { Post } from '@/types/data';

const getPostLength = () => {
  return (Object.keys(posts) as Array<keyof typeof posts>).reduce(
    (length, category) => length + posts[category].length,
    0,
  );
};

const getAllPosts = (): Promise<Post>[] => {
  const postLength = getPostLength();

  return Array.from({ length: postLength }, (_, i) => postLength - i).map(id =>
    import(`@/posts/${id}.md`).then(postModule =>
      parsePost(id, postModule.default),
    ),
  );
};

const getPostsInCategory = (category: keyof typeof posts): Promise<Post>[] => {
  const postIds = posts[category];

  return postIds.map(id =>
    import(`@/posts/${id}.md`).then(postModule =>
      parsePost(id, postModule.default),
    ),
  );
};

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

export { getPostLength, getAllPosts, getPostsInCategory, parsePost };
