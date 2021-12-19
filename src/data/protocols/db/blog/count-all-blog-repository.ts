export interface CountAllBlogRepository {
  count: (
    params: CountAllBlogRepository.Params,
  ) => CountAllBlogRepository.Result;
}

export namespace CountAllBlogRepository {
  export type Params = {
    category?: string;
  };

  export type Result = Promise<{
    total: string | number;
  }>;
}
