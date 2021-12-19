import { Blog, Section } from '@/domain/models';

export interface CreateBlog {
  create: (params: CreateBlog.Params) => CreateBlog.Result;
}

export namespace CreateBlog {
  export type Params = Pick<
    Blog,
    'title' | 'shortDescription' | 'author' | 'authorPhoto'
  > & {
    categories: string[];
    sections: Omit<Section, 'sectionId' | 'blogId'>[];
  };

  export type Result = Promise<void>;
}
