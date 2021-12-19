export interface RelBlogAndCategoryRepository {
  link: (
    params: RelBlogAndCategoryRepository.Params,
  ) => RelBlogAndCategoryRepository.Result;
}

export namespace RelBlogAndCategoryRepository {
  export type Params = {
    blogId: number;
    categoryId: number;
  }[];

  export type Result = Promise<number[]>;
}
