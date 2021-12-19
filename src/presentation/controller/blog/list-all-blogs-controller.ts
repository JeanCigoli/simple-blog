import { ListAllBlogs } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { ok, serverError } from '@/utils/response';

export class ListAllBlogsController implements Controller {
  constructor(private readonly listAllBlogs: ListAllBlogs) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const blogs = await this.listAllBlogs.listAll(httpRequest.query);

      return ok('Listagem de todas as publicações', blogs);
    } catch (error: any) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
