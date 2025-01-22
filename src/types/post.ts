export interface Post {
  title: string;
  category: string;
  content: string;
  date: Date;
}

export type PostMetadata = Omit<Post, 'content'>;
