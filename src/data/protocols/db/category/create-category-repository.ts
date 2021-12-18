import { Category } from '@/domain/models';

export interface CreateCategoryRepository {
  create: (
    params: CreateCategoryRepository.Params,
  ) => CreateCategoryRepository.Result;
}

export namespace CreateCategoryRepository {
  export type Params = Omit<Category, 'categoryId'>;

  export type Result = Promise<Category>;
}
