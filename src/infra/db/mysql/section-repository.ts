import {
  CreateSectionRepository,
  ListAllSectionByBlogRepository,
  ListOneSectionByExternalIdRepository,
  UpdateSectionRepository,
} from '@/data/protocols/db';
import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from '@badass-team-code/formatted-cases-words';
import { dbBlog } from './helper';

export class SectionRepository
  implements
    CreateSectionRepository,
    ListAllSectionByBlogRepository,
    ListOneSectionByExternalIdRepository,
    UpdateSectionRepository
{
  update(
    params: UpdateSectionRepository.Params,
    id: number,
  ): UpdateSectionRepository.Result {
    return dbBlog('blog.tb_section')
      .update(formateCamelCaseKeysForSnakeCase(params))
      .where('section_id', id);
  }

  async findByExternalId(
    params: ListOneSectionByExternalIdRepository.Params,
  ): ListOneSectionByExternalIdRepository.Result {
    const section = await dbBlog('blog.tb_section')
      .select('*')
      .where('external_id', params.sectionId)
      .andWhere('blog_id', params.blogId)
      .first();

    return formateSnakeCaseKeysForCamelCase(section);
  }

  findByBlog(id: number): ListAllSectionByBlogRepository.Result {
    return dbBlog('blog.tb_section')
      .select('title', 'text', 'image', 'external_id as id')
      .where('blog_id', id);
  }

  create(
    params: CreateSectionRepository.Params,
  ): CreateSectionRepository.Result {
    return dbBlog('blog.tb_section').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }
}
