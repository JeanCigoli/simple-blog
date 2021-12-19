import {
  ListAllSectionByBlogRepository,
  ListNamesCategoriesByBlogRepository,
  ListOneBlogByExternalIdRepository,
} from '@/data/protocols/db';
import { ListBlogById } from '@/domain/usecases';

export class DbListBlogById implements ListBlogById {
  constructor(
    private readonly listOneBlogByExternalIdRepository: ListOneBlogByExternalIdRepository,
    private readonly listNamesCategoriesByBlogRepository: ListNamesCategoriesByBlogRepository,
    private readonly listAllSectionByBlogRepository: ListAllSectionByBlogRepository,
  ) {}

  async listById(params: ListBlogById.Params): ListBlogById.Result {
    const blog = await this.listOneBlogByExternalIdRepository.findByExternalId(
      params.id,
    );

    if (!blog) {
      throw new Error('BLOG_NOT_FOUND');
    }

    const namesCategories =
      await this.listNamesCategoriesByBlogRepository.findNamesByBlog(
        blog.blogId,
      );

    const sections = await this.listAllSectionByBlogRepository.findByBlog(
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
      sections: sections,
    };
  }
}
