import { Category } from '@/domain/models';

export interface ListNamesCategoriesByBlogRepository {
  findNamesByBlog: (
    blogId: number,
  ) => ListNamesCategoriesByBlogRepository.Result;
}

export namespace ListNamesCategoriesByBlogRepository {
  export type Result = Promise<Pick<Category, 'name'>[]>;
}
