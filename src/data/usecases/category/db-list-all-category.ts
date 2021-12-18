import { ListAllCategoriesRepository } from '@/data/protocols/db';
import { ListAllCategories } from '@/domain/usecases';

export class DbListAllCategories implements ListAllCategories {
  constructor(
    private readonly ListAllCategoriesRepository: ListAllCategoriesRepository,
  ) {}

  async listAll(): ListAllCategories.Result {
    const categories = await this.ListAllCategoriesRepository.findAll();

    return categories.map((value) => ({
      id: value.externalId,
      name: value.name,
    }));
  }
}
