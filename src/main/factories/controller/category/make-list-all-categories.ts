import { DbListAllCategories } from '@/data/usecases';
import { CategoryRepository } from '@/infra/db/mysql';
import { ListAllCategoriesController } from '@/presentation/controller';

export const makeListAllCategories = () => {
  const categoryRepository = new CategoryRepository();

  const dbListAllCategories = new DbListAllCategories(categoryRepository);

  return new ListAllCategoriesController(dbListAllCategories);
};
