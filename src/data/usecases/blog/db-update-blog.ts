import {
  DeleteRelBlogCategoryRepository,
  ListOneBlogByExternalIdRepository,
  ListOneCategoryByExternalIdRepository,
  RelBlogAndCategoryRepository,
} from '@/data/protocols/db';
import { UpdateBlogRepository } from '@/data/protocols/db/blog/update-blog-repository';
import { UpdateBlog } from '@/domain/usecases';

export class DbUpdateBlog implements UpdateBlog {
  constructor(
    private readonly listOneCategoryByExternalIdRepository: ListOneCategoryByExternalIdRepository,
    private readonly listOneBlogByExternalIdRepository: ListOneBlogByExternalIdRepository,
    private readonly deleteRelBlogCategoryRepository: DeleteRelBlogCategoryRepository,
    private readonly relBlogAndCategoryRepository: RelBlogAndCategoryRepository,
    private readonly updateBlogRepository: UpdateBlogRepository,
  ) {}

  async update(params: UpdateBlog.Params): UpdateBlog.Result {
    const { externalId, categories, ...props } = params;

    const blogExist =
      await this.listOneBlogByExternalIdRepository.findByExternalId(externalId);

    if (!blogExist) {
      throw new Error('BLOG_NOT_FOUND');
    }

    const validateCategories = await Promise.all(
      categories.map(async (categoryId) => {
        const category =
          await this.listOneCategoryByExternalIdRepository.findByExternalId(
            categoryId,
          );

        if (!category) {
          throw new Error('CATEGORY_NOT_FOUND');
        }

        return category;
      }),
    );

    await this.deleteRelBlogCategoryRepository.deleteRelByBlog(
      blogExist.blogId,
    );

    await this.relBlogAndCategoryRepository.link(
      validateCategories.map((category) => ({
        blogId: blogExist.blogId,
        categoryId: category.categoryId,
      })),
    );

    await this.updateBlogRepository.update(props, blogExist.blogId);
  }
}
