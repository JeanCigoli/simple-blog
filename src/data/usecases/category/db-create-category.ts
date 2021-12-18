import { CreateCategory } from '@/domain/usecases';

export class DbCreateCategory implements CreateCategory {
  async create(params: CreateCategory.Params): CreateCategory.Result {
    return {} as CreateCategory.Result;
  }
}
