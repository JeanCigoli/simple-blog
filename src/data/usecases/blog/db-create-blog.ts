import { CreateBlog } from '@/domain/usecases';

export class DbCreateBlog implements CreateBlog {
  async create(params: CreateBlog.Params): CreateBlog.Result {
    return;
  }
}
