import {
  CreateBlogRepository,
  ListOneBlogByTitleRepository,
  RelBlogAndCategoryRepository,
} from '@/data/protocols/db';
import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from '@badass-team-code/formatted-cases-words';
import { dbBlog } from './helper';

export class BlogRepository
  implements
    CreateBlogRepository,
    ListOneBlogByTitleRepository,
    RelBlogAndCategoryRepository
{
  async findByTitle(title: string): ListOneBlogByTitleRepository.Result {
    const blog = await dbBlog('blog.tb_blog')
      .select('*')
      .whereNull('deleted_at')
      .andWhere('title', title)
      .first();

    return formateSnakeCaseKeysForCamelCase(blog);
  }

  link(
    params: RelBlogAndCategoryRepository.Params,
  ): RelBlogAndCategoryRepository.Result {
    return dbBlog('blog.tb_rel_blog_category').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }

  create(params: CreateBlogRepository.Params): CreateBlogRepository.Result {
    return dbBlog('blog.tb_blog').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }
}
