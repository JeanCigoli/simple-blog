import { CategoryDTO } from '@/domain/dto';

export interface ListAllCategories {
  listAll: () => ListAllCategories.Result;
}

export namespace ListAllCategories {
  export type Result = Promise<CategoryDTO[]>;
}
