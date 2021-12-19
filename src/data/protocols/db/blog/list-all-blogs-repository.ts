import { Blog } from '@/domain/models';

export interface ListAllBlogRepository {
  findAll: (
    params: ListAllBlogRepository.Params,
  ) => ListAllBlogRepository.Result;
}

export namespace ListAllBlogRepository {
  export type Params = {
    offset: number;
    limit: number;
  };

  export type Result = Promise<Blog[]>;
}
