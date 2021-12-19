import { Section } from '../models';

export type SectionDTO = Omit<
  Section,
  'sectionId' | 'blogId' | 'externalId'
> & { id: string };
