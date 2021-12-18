import {
  CreateCategoryRepository,
  ListAllCategoriesRepository,
  ListOneCategoryByNameRepository,
} from '@/data/protocols/db';
import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from '@badass-team-code/formatted-cases-words';
import { dbBlog } from './helper';

export class CategoryRepository
  implements
    ListAllCategoriesRepository,
    ListOneCategoryByNameRepository,
    CreateCategoryRepository
{
  create(
    params: CreateCategoryRepository.Params,
  ): CreateCategoryRepository.Result {
    return dbBlog('blog.tb_category').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }

  async findByName(name: string): ListOneCategoryByNameRepository.Result {
    const category = await dbBlog('blog.tb_category')
      .select('*')
      .where('name', name)
      .first();

    return formateSnakeCaseKeysForCamelCase(category);
  }

  async findAll(): ListAllCategoriesRepository.Result {
    const categories = await dbBlog('blog.tb_category').select('*');

    return formateSnakeCaseKeysForCamelCase(categories);
  }
}
