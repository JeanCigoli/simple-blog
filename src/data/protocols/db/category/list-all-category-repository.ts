import { Category } from '@/domain/models';

export interface ListAllCategoryRepository {
  findAll: () => ListAllCategoryRepository.Result;
}

export namespace ListAllCategoryRepository {
  export type Result = Promise<Category[]>;
}
