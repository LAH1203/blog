export interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  content: string;
  date: string;
}

export type PostMetadata = Omit<Post, 'content'>;
