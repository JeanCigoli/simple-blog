import {
  CreateCategoryRepository,
  ListOneCategoryByNameRepository,
} from '@/data/protocols/db';
import { GenerateUuid } from '@/data/protocols/utils';
import { CreateCategory } from '@/domain/usecases';

export class DbCreateCategory implements CreateCategory {
  constructor(
    private readonly listOneCategoryByNameRepository: ListOneCategoryByNameRepository,
    private readonly createCategoryRepository: CreateCategoryRepository,
    private readonly generateUuid: GenerateUuid,
  ) {}

  async create(params: CreateCategory.Params): CreateCategory.Result {
    const categoryExist = await this.listOneCategoryByNameRepository.findByName(
      params.name,
    );

    if (categoryExist) {
      throw new Error('CATEGORY_EXIST');
    }

    await this.createCategoryRepository.create({
      createdAt: new Date(),
      name: params.name,
      externalId: this.generateUuid(),
    });

    return;
  }
}
