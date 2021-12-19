export interface CountAllBlogRepository {
  count: () => CountAllBlogRepository.Result;
}

export namespace CountAllBlogRepository {
  export type Result = Promise<{
    total: string | number;
  }>;
}
