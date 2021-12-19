export interface DeleteBlog {
  delete: (params: DeleteBlog.Params) => DeleteBlog.Result;
}

export namespace DeleteBlog {
  export type Params = {
    id: string;
  };

  export type Result = Promise<void>;
}
