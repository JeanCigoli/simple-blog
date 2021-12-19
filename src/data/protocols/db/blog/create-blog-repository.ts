import { Blog } from '@/domain/models';

export interface CreateBlogRepository {
  create: (params: CreateBlogRepository.Params) => CreateBlogRepository.Result;
}

export namespace CreateBlogRepository {
  export type Params = Omit<
    Blog,
    'blogId' | 'createdAt' | 'updatedAt' | 'deletedAt'
  >;

  export type Result = Promise<number[]>;
}
