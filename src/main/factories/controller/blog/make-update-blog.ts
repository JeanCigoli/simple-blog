import { DbUpdateBlog } from '@/data/usecases';
import { BlogRepository, CategoryRepository } from '@/infra/db/mysql';
import { UpdateBlogController } from '@/presentation/controller';

export const makeUpdateBlog = () => {
  const blogRepository = new BlogRepository();
  const categoryRepository = new CategoryRepository();

  const dbUpdateBlog = new DbUpdateBlog(
    categoryRepository,
    blogRepository,
    blogRepository,
    blogRepository,
    blogRepository,
  );

  return new UpdateBlogController(dbUpdateBlog);
};
