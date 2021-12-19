import {
  CreateSectionRepository,
  ListAllSectionByBlogRepository,
} from '@/data/protocols/db';
import { formateCamelCaseKeysForSnakeCase } from '@badass-team-code/formatted-cases-words';
import { dbBlog } from './helper';

export class SectionRepository
  implements CreateSectionRepository, ListAllSectionByBlogRepository
{
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
