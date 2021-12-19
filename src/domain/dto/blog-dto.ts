import { Blog } from '../models';

export type BlogDTO = Omit<Blog, 'blogId' | 'externalId' | 'deletedAt'> & {
  id: string;
  categories: string[];
};
