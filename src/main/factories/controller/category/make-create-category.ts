import { DbCreateCategory } from '@/data/usecases';
import { CategoryRepository } from '@/infra/db/mysql';
import { CreateCategoryController } from '@/presentation/controller';
import { generateUuid } from '@/utils/uuid';

export const makeCreateCategory = () => {
  const categoryRepository = new CategoryRepository();

  const dbCreateCategory = new DbCreateCategory(
    categoryRepository,
    categoryRepository,
    generateUuid,
  );

  return new CreateCategoryController(dbCreateCategory);
};
