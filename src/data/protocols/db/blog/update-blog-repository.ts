import { Blog } from '@/domain/models';

export interface UpdateBlogRepository {
  update: (
    params: UpdateBlogRepository.Params,
    id: number,
  ) => UpdateBlogRepository.Result;
}

export namespace UpdateBlogRepository {
  export type Params = Partial<Blog>;

  export type Result = Promise<number>;
}
