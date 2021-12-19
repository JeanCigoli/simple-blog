import { Category } from '@/domain/models';

export interface ListOneCategoryByExternalIdRepository {
  findByExternalId: (
    id: string,
  ) => ListOneCategoryByExternalIdRepository.Result;
}

export namespace ListOneCategoryByExternalIdRepository {
  export type Result = Promise<Category>;
}
