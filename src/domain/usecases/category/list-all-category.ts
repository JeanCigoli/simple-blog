export interface ListAllCategory {
  listAll: () => ListAllCategory.Result;
}

export namespace ListAllCategory {
  export type Result = Promise<
    {
      id: string;
      name: string;
    }[]
  >;
}
