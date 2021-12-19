import { DbDeleteBlog } from '@/data/usecases';
import { BlogRepository } from '@/infra/db/mysql';
import { DeleteBlogController } from '@/presentation/controller';

export const makeDeleteBlog = () => {
  const blogRepository = new BlogRepository();

  const dbDeleteBlog = new DbDeleteBlog(blogRepository, blogRepository);

  return new DeleteBlogController(dbDeleteBlog);
};
