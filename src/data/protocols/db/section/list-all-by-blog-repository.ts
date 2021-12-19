import { SectionDTO } from '@/domain/dto';

export interface ListAllSectionByBlogRepository {
  findByBlog: (id: number) => ListAllSectionByBlogRepository.Result;
}

export namespace ListAllSectionByBlogRepository {
  export type Result = Promise<SectionDTO[]>;
}
