import { Section } from '@/domain/models';

export interface UpdateSection {
  update: (params: UpdateSection.Params) => UpdateSection.Result;
}

export namespace UpdateSection {
  export type Params = Omit<Section, 'sectionId' | 'blogId' | 'externalId'> & {
    blogId: string;
    sectionId: string;
  };

  export type Result = Promise<void>;
}
