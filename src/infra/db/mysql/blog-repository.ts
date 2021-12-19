import {
  CountAllBlogRepository,
  CreateBlogRepository,
  ListAllBlogRepository,
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
    RelBlogAndCategoryRepository,
    ListAllBlogRepository,
    CountAllBlogRepository
{
  async count(
    params: CountAllBlogRepository.Params,
  ): CountAllBlogRepository.Result {
    const [result] = await dbBlog('blog.tb_blog as blog')
      .innerJoin(
        'blog.tb_rel_blog_category as rel',
        'blog.blog_id',
        'rel.blog_id',
      )
      .innerJoin(
        'blog.tb_category as category',
        'category.category_id',
        'rel.category_id',
      )
      .distinct('blog.blog_id')
      .count('blog.blog_id', { as: 'total' })
      .whereNull('deleted_at')
      .andWhere('category.external_id', params.category);

    return result;
  }

  async findAll(
    params: ListAllBlogRepository.Params,
  ): ListAllBlogRepository.Result {
    const blog = await dbBlog('blog.tb_blog as blog')
      .innerJoin(
        'blog.tb_rel_blog_category as rel',
        'blog.blog_id',
        'rel.blog_id',
      )
      .innerJoin(
        'blog.tb_category as category',
        'category.category_id',
        'rel.category_id',
      )
      .distinct('blog.blog_id')
      .select('blog.*')
      .whereNull('deleted_at')
      .andWhere('category.external_id', params.category)
      .offset(params.offset)
      .limit(params.limit);

    return formateSnakeCaseKeysForCamelCase(blog);
  }

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
