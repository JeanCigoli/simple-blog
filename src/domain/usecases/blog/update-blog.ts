import { Blog } from '@/domain/models';

export interface UpdateBlog {
  update: (params: UpdateBlog.Params) => UpdateBlog.Result;
}

export namespace UpdateBlog {
  export type Params = Omit<
    Blog,
    'blogId' | 'deletedAt' | 'createdAt' | 'updatedAt'
  > & {
    categories: string[];
  };

  export type Result = Promise<void>;
}
