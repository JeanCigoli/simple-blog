import {
  CountAllBlogRepository,
  ListAllBlogRepository,
  ListNamesCategoriesByBlogRepository,
} from '@/data/protocols/db';
import { ListAllBlogs } from '@/domain/usecases';

export class DbListAllBlog implements ListAllBlogs {
  constructor(
    private readonly countAllBlogRepository: CountAllBlogRepository,
    private readonly listAllBlogRepository: ListAllBlogRepository,
    private readonly listNamesCategoriesByBlogRepository: ListNamesCategoriesByBlogRepository,
  ) {}

  async listAll(params: ListAllBlogs.Params): ListAllBlogs.Result {
    const page = +params.page;
    const limit = +params.limit;

    const query = {
      offset: page === 1 ? 0 : (page - 1) * limit,
      limit,
    };

    const count = await this.countAllBlogRepository.count();

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
