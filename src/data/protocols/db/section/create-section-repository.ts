import { Section } from '@/domain/models';

export interface CreateSectionRepository {
  create: (
    params: CreateSectionRepository.Params,
  ) => CreateSectionRepository.Result;
}

export namespace CreateSectionRepository {
  export type Params = Omit<Section, 'sectionId'>[];

  export type Result = Promise<number[]>;
}
