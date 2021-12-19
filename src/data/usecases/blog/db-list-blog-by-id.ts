import { ListBlogById } from '@/domain/usecases';

export class DbListBlogById implements ListBlogById {
  async listById(params: ListBlogById.Params): ListBlogById.Result {
    return {} as ListBlogById.Result;
  }
}
