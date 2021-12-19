import { DbListBlogById } from '@/data/usecases';
import {
  BlogRepository,
  CategoryRepository,
  SectionRepository,
} from '@/infra/db/mysql';
import { ListBlogByIdController } from '@/presentation/controller';

export const makeListBlogById = () => {
  const blogRepository = new BlogRepository();
  const categoryRepository = new CategoryRepository();
  const sectionRepository = new SectionRepository();

  const dbListBlogById = new DbListBlogById(
    blogRepository,
    categoryRepository,
    sectionRepository,
  );

  return new ListBlogByIdController(dbListBlogById);
};
