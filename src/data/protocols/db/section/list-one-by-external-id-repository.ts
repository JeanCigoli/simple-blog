import { Section } from '@/domain/models';

export interface ListOneSectionByExternalIdRepository {
  findByExternalId: (
    params: ListOneSectionByExternalIdRepository.Params,
  ) => ListOneSectionByExternalIdRepository.Result;
}

export namespace ListOneSectionByExternalIdRepository {
  export type Params = {
    sectionId: string;
    blogId: number;
  };

  export type Result = Promise<Section>;
}
