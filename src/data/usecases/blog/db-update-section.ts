import {
  ListOneBlogByExternalIdRepository,
  ListOneSectionByExternalIdRepository,
  UpdateSectionRepository,
} from '@/data/protocols/db';
import { UpdateSection } from '@/domain/usecases';

export class DbUpdateSection implements UpdateSection {
  constructor(
    private readonly listOneBlogByExternalIdRepository: ListOneBlogByExternalIdRepository,
    private readonly listOneSectionByExternalIdRepository: ListOneSectionByExternalIdRepository,
    private readonly updateSectionRepository: UpdateSectionRepository,
  ) {}

  async update(params: UpdateSection.Params): UpdateSection.Result {
    const { blogId, sectionId, ...props } = params;

    const blog = await this.listOneBlogByExternalIdRepository.findByExternalId(
      blogId,
    );

    if (!blog) {
      throw new Error('BLOG_NOT_FOUND');
    }

    const section =
      await this.listOneSectionByExternalIdRepository.findByExternalId({
        blogId: blog.blogId,
        sectionId,
      });

    if (!section) {
      throw new Error('SECTION_NOT_FOUND');
    }

    await this.updateSectionRepository.update(props, section.sectionId);

    return;
  }
}
