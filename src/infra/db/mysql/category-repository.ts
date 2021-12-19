import {
  CreateCategoryRepository,
  ListAllCategoriesRepository,
  ListNamesCategoriesByBlogRepository,
  ListOneCategoryByExternalIdRepository,
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
    CreateCategoryRepository,
    ListOneCategoryByExternalIdRepository,
    ListNamesCategoriesByBlogRepository
{
  findNamesByBlog(id: number): ListNamesCategoriesByBlogRepository.Result {
    return dbBlog('blog.tb_category as category')
      .innerJoin(
        'blog.tb_rel_blog_category as rel',
        'rel.category_id',
        'category.category_id',
      )
      .select('category.name')
      .where('rel.blog_id', id);
  }

  create(
    params: CreateCategoryRepository.Params,
  ): CreateCategoryRepository.Result {
    return dbBlog('blog.tb_category').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }

  async findByExternalId(
    id: string,
  ): ListOneCategoryByExternalIdRepository.Result {
    const category = await dbBlog('blog.tb_category')
      .select('*')
      .where('external_id', id)
      .first();

    return formateSnakeCaseKeysForCamelCase(category);
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
