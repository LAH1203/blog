import { PostMetadata } from '@/types/post';

const readMetadata = (fileName: PostMetadata['fileName']): Pick<PostMetadata, 'title' | 'date'> => {
  const regex = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
  const match = fileName.match(regex);

  if (!match) return { title: '', date: new Date() };

  const [, dateString, rawTitle] = match!;

  const title = rawTitle.replace(/-/g, ' ');
  const date = new Date(dateString);

  return { title, date };
};

export default readMetadata;
