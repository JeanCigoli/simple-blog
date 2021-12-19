import { ListOneBlogByExternalIdRepository } from '@/data/protocols/db';
import { UpdateBlogRepository } from '@/data/protocols/db/blog/update-blog-repository';
import { DeleteBlog } from '@/domain/usecases';

export class DbDeleteBlog implements DeleteBlog {
  constructor(
    private readonly listOneBlogByExternalIdRepository: ListOneBlogByExternalIdRepository,
    private readonly updateBlogRepository: UpdateBlogRepository,
  ) {}

  async delete(params: DeleteBlog.Params): DeleteBlog.Result {
    const blogExist =
      await this.listOneBlogByExternalIdRepository.findByExternalId(params.id);

    if (!blogExist) {
      throw new Error('BLOG_NOT_FOUND');
    }

    await this.updateBlogRepository.update(
      {
        deletedAt: new Date(),
      },
      blogExist.blogId,
    );

    return;
  }
}
