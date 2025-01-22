export interface Post {
  title: string;
  category: string;
  content: string;
  date: Date;
  fileName: string;
}

export type PostMetadata = Omit<Post, 'content'>;
