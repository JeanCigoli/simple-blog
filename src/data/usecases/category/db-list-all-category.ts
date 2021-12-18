import { ListAllCategoryRepository } from '@/data/protocols/db';
import { ListAllCategory } from '@/domain/usecases';

export class DbListAllCategory implements ListAllCategory {
  constructor(
    private readonly listAllCategoryRepository: ListAllCategoryRepository,
  ) {}

  async listAll(): ListAllCategory.Result {
    const categories = await this.listAllCategoryRepository.findAll();

    return categories.map((value) => ({
      id: value.externalId,
      name: value.name,
    }));
  }
}
