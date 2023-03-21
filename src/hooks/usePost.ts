import { posts } from '@/constants/data';
import { Post } from '@/types/data';
import { parsePost } from '@/utils/post';

const usePost = () => {
  const getPostLength = () => {
    return (Object.keys(posts) as Array<keyof typeof posts>).reduce(
      (length, category) => length + posts[category].length,
      0,
    );
  };

  const getAllPosts = (): Promise<Post>[] => {
    const postLength = getPostLength();

    return Array.from({ length: postLength }, (_, i) => postLength - i).map(
      id =>
        import(`@/posts/${id}.md`).then(postModule =>
          parsePost(id, postModule.default),
        ),
    );
  };

  const getPostsInCategory = (
    category: keyof typeof posts,
  ): Promise<Post>[] => {
    const postIds = posts[category];

    return postIds.map(id =>
      import(`@/posts/${id}.md`).then(postModule =>
        parsePost(id, postModule.default),
      ),
    );
  };

  return { getPostLength, getAllPosts, getPostsInCategory };
};

export default usePost;
