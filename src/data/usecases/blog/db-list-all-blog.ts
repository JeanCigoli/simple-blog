import {
  CountAllBlogRepository,
  ListAllBlogRepository,
  ListNamesCategoriesByBlogRepository,
  ListOneCategoryByExternalIdRepository,
} from '@/data/protocols/db';
import { ListAllBlogs } from '@/domain/usecases';

export class DbListAllBlog implements ListAllBlogs {
  constructor(
    private readonly countAllBlogRepository: CountAllBlogRepository,
    private readonly listAllBlogRepository: ListAllBlogRepository,
    private readonly listNamesCategoriesByBlogRepository: ListNamesCategoriesByBlogRepository,
    private readonly listOneCategoryByExternalIdRepository: ListOneCategoryByExternalIdRepository,
  ) {}

  async listAll(params: ListAllBlogs.Params): ListAllBlogs.Result {
    const page = +params.page;
    const limit = +params.limit;

    const query = {
      offset: page === 1 ? 0 : (page - 1) * limit,
      limit,
      category: params.category || '',
    };

    if (params.category) {
      const category =
        await this.listOneCategoryByExternalIdRepository.findByExternalId(
          params.category,
        );

      if (!category) {
        throw new Error('CATEGORY_NOT_FOUND');
      }
    }

    const count = await this.countAllBlogRepository.count({
      category: query.category,
    });

    const blogs = await this.listAllBlogRepository.findAll(query);

    const promiseBlogs = blogs.map(async (blog) => {
      const namesCategories =
        await this.listNamesCategoriesByBlogRepository.findNamesByBlog(
          blog.blogId,
        );

      return {
        id: blog.externalId,
        title: blog.title,
        shortDescription: blog.shortDescription,
        author: blog.author,
        authorPhoto: blog.authorPhoto,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        categories: namesCategories.map((value) => value.name),
      };
    });

    return {
      result: await Promise.all(promiseBlogs),
      pagination: {
        page: page,
        quantityPage: Math.ceil(+count.total / limit),
        total: +count.total,
      },
    };
  }
}
