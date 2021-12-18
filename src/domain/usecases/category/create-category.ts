import { Category } from '@/domain/models';

export interface CreateCategory {
  create: (params: CreateCategory.Params) => CreateCategory.Result;
}

export namespace CreateCategory {
  export type Params = Pick<Category, 'name'>;

  export type Result = Promise<void>;
}
