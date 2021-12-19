import { BlogDTO } from '@/domain/dto';

export interface ListAllBlogs {
  listAll: (params: ListAllBlogs.Params) => ListAllBlogs.Result;
}

export namespace ListAllBlogs {
  export type Params = {
    page: number;
    limit: number;
    category?: string;
  };

  export type Result = Promise<{
    result: BlogDTO[];
    pagination: {
      page: number;
      quantityPage: number;
      total: number;
    };
  }>;
}
