import {
  CreateBlogRepository,
  CreateSectionRepository,
  ListOneBlogByTitleRepository,
  ListOneCategoryByExternalIdRepository,
  RelBlogAndCategoryRepository,
} from '@/data/protocols/db';
import { GenerateUuid } from '@/data/protocols/utils';
import { CreateBlog } from '@/domain/usecases';

export class DbCreateBlog implements CreateBlog {
  constructor(
    private readonly listOneCategoryByExternalIdRepository: ListOneCategoryByExternalIdRepository,
    private readonly listOneBlogByTitleRepository: ListOneBlogByTitleRepository,
    private readonly createBlogRepository: CreateBlogRepository,
    private readonly relBlogAndCategoryRepository: RelBlogAndCategoryRepository,
    private readonly createSectionRepository: CreateSectionRepository,
    private readonly generateUuid: GenerateUuid,
  ) {}

  async create(params: CreateBlog.Params): CreateBlog.Result {
    const validateCategories = await Promise.all(
      params.categories.map(async (categoryId) => {
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

    const blogExist = await this.listOneBlogByTitleRepository.findByTitle(
      params.title,
    );

    if (blogExist) {
      throw new Error('BLOG_EXIST');
    }

    const [blogId] = await this.createBlogRepository.create({
      author: params.author,
      authorPhoto: params.authorPhoto,
      shortDescription: params.shortDescription,
      title: params.title,
      externalId: this.generateUuid(),
    });

    await this.relBlogAndCategoryRepository.link(
      validateCategories.map((category) => ({
        blogId,
        categoryId: category.categoryId,
      })),
    );

    await this.createSectionRepository.create(
      params.sections.map((section) => ({ ...section, blogId })),
    );

    return;
  }
}
