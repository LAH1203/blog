import { Post } from '@/types/data';

const idDesc = (a: Post, b: Post): -1 | 0 | 1 => {
  if (a.id < b.id) return 1;
  if (a.id > b.id) return -1;

  return 0;
};

export { idDesc };
