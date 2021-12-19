export interface DeleteRelBlogCategoryRepository {
  deleteRelByBlog: (id: number) => DeleteRelBlogCategoryRepository.Result;
}

export namespace DeleteRelBlogCategoryRepository {
  export type Result = Promise<number>;
}
