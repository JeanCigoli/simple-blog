import { DbCreateBlog } from '@/data/usecases';
import {
  BlogRepository,
  CategoryRepository,
  SectionRepository,
} from '@/infra/db/mysql';
import { CreateBlogController } from '@/presentation/controller';
import { generateUuid } from '@/utils/uuid';

export const makeCreateBlog = () => {
  const categoryRepository = new CategoryRepository();
  const blogRepository = new BlogRepository();
  const sectionRepository = new SectionRepository();

  const dbCreateBlog = new DbCreateBlog(
    categoryRepository,
    blogRepository,
    blogRepository,
    blogRepository,
    sectionRepository,
    generateUuid,
  );

  return new CreateBlogController(dbCreateBlog);
};
