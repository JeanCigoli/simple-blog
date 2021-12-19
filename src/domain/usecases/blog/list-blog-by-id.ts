import { BlogDTO, SectionDTO } from '@/domain/dto';

export interface ListBlogById {
  listById: (params: ListBlogById.Params) => ListBlogById.Result;
}

export namespace ListBlogById {
  export type Params = {
    id: string;
  };

  export type Result = Promise<
    BlogDTO & {
      sections: SectionDTO[];
    }
  >;
}
