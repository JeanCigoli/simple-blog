import { Blog } from '@/domain/models';

export interface ListOneBlogByTitleRepository {
  findByTitle: (title: string) => ListOneBlogByTitleRepository.Result;
}

export namespace ListOneBlogByTitleRepository {
  export type Result = Promise<Blog>;
}
