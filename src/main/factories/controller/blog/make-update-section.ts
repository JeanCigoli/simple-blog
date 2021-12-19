import { DbUpdateSection } from '@/data/usecases';
import { BlogRepository, SectionRepository } from '@/infra/db/mysql';
import { UpdateSectionController } from '@/presentation/controller';

export const makeUpdateSection = () => {
  const blogRepository = new BlogRepository();
  const sectionRepository = new SectionRepository();

  const dbUpdateSection = new DbUpdateSection(
    blogRepository,
    sectionRepository,
    sectionRepository,
  );

  return new UpdateSectionController(dbUpdateSection);
};
