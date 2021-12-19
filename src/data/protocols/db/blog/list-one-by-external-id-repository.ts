import { Blog } from '@/domain/models';

export interface ListOneBlogByExternalIdRepository {
  findByExternalId: (id: string) => ListOneBlogByExternalIdRepository.Result;
}

export namespace ListOneBlogByExternalIdRepository {
  export type Result = Promise<Blog>;
}
