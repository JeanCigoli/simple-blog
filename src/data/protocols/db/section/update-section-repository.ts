import { Section } from '@/domain/models';

export interface UpdateSectionRepository {
  update: (
    params: UpdateSectionRepository.Params,
    id: number,
  ) => UpdateSectionRepository.Result;
}

export namespace UpdateSectionRepository {
  export type Params = Partial<Section>;

  export type Result = Promise<number>;
}
