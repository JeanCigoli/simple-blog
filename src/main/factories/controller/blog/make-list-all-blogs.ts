import { DbListAllBlog } from '@/data/usecases';
import { BlogRepository, CategoryRepository } from '@/infra/db/mysql';
import { ListAllBlogsController } from '@/presentation/controller';

export const makeListAllBlogs = () => {
  const blogRepository = new BlogRepository();
  const categoryRepository = new CategoryRepository();

  const dbListAllBlog = new DbListAllBlog(
    blogRepository,
    blogRepository,
    categoryRepository,
  );

  return new ListAllBlogsController(dbListAllBlog);
};
