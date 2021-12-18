export interface ListAllCategories {
  listAll: () => ListAllCategories.Result;
}

export namespace ListAllCategories {
  export type Result = Promise<
    {
      id: string;
      name: string;
    }[]
  >;
}
