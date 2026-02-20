export interface Post {
  title: string;
  category: string;
  description: string;
  content: string;
  date: Date;
  fileName: string;
  thumbnail?: string;
}

export type PostMetadata = Omit<Post, 'content'>;
