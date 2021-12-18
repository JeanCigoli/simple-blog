import { Category } from '@/domain/models';

export interface ListAllCategoriesRepository {
  findAll: () => ListAllCategoriesRepository.Result;
}

export namespace ListAllCategoriesRepository {
  export type Result = Promise<Category[]>;
}
