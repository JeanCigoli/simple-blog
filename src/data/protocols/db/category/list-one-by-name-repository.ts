import { Category } from '@/domain/models';

export interface ListOneCategoryByNameRepository {
  findByName(name: string): ListOneCategoryByNameRepository.Result;
}

export namespace ListOneCategoryByNameRepository {
  export type Result = Promise<Category>;
}
