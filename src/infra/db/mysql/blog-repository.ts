import {
  CountAllBlogRepository,
  CreateBlogRepository,
  DeleteRelBlogCategoryRepository,
  ListAllBlogRepository,
  ListOneBlogByExternalIdRepository,
  ListOneBlogByTitleRepository,
  RelBlogAndCategoryRepository,
} from '@/data/protocols/db';
import { UpdateBlogRepository } from '@/data/protocols/db/blog/update-blog-repository';
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
    CountAllBlogRepository,
    ListOneBlogByExternalIdRepository,
    DeleteRelBlogCategoryRepository,
    UpdateBlogRepository
{
  deleteRelByBlog(id: number): DeleteRelBlogCategoryRepository.Result {
    return dbBlog('blog.tb_rel_blog_category').where('blog_id', id).delete();
  }

  async count(): CountAllBlogRepository.Result {
    const [result] = await dbBlog('blog.tb_blog')
      .count('*', { as: 'total' })
      .whereNull('deleted_at');

    return result;
  }

  update(
    params: UpdateBlogRepository.Params,
    id: number,
  ): UpdateBlogRepository.Result {
    return dbBlog('blog.tb_blog')
      .update(formateCamelCaseKeysForSnakeCase(params))
      .where('blog_id', id);
  }

  async findAll(
    params: ListAllBlogRepository.Params,
  ): ListAllBlogRepository.Result {
    const blog = await dbBlog('blog.tb_blog')
      .select('*')
      .whereNull('deleted_at')
      .offset(params.offset)
      .limit(params.limit);

    return formateSnakeCaseKeysForCamelCase(blog);
  }

  async findByExternalId(id: string): ListOneBlogByExternalIdRepository.Result {
    const blog = await dbBlog('blog.tb_blog')
      .select('*')
      .whereNull('deleted_at')
      .andWhere('external_id', id)
      .first();

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
