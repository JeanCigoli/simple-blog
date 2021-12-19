import { CreateSectionRepository } from '@/data/protocols/db';
import { formateCamelCaseKeysForSnakeCase } from '@badass-team-code/formatted-cases-words';
import { dbBlog } from './helper';

export class SectionRepository implements CreateSectionRepository {
  create(
    params: CreateSectionRepository.Params,
  ): CreateSectionRepository.Result {
    return dbBlog('blog.tb_section').insert(
      formateCamelCaseKeysForSnakeCase(params),
    );
  }
}
