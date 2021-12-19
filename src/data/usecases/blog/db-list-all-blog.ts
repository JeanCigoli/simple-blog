import { ListAllBlogRepository } from '@/data/protocols/db';
import { ListAllBlogs } from '@/domain/usecases';

export class DbListAllBlog implements ListAllBlogs {
  constructor(private readonly listAllBlogRepository: ListAllBlogRepository) {}

  async listAll(params: ListAllBlogs.Params): ListAllBlogs.Result {
    const page = +params.page;
    const limit = +params.limit;

    const query = {
      offset: page === 1 ? 0 : page - 1 * limit,
      limit,
      category: params.category,
    };

    const blogs = await this.listAllBlogRepository.findAll(query);

    console.log(blogs);

    return {
      result: [],
      pagination: {
        lastPage: 10,
        page: 1,
        total: 50,
      },
    };
  }
}
