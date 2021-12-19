import { ListBlogById } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { notFound, ok, serverError } from '@/utils/response';

export class ListBlogByIdController implements Controller {
  constructor(private readonly listBlogById: ListBlogById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const blogs = await this.listBlogById.listById(httpRequest.params);

      return ok('Listagem detalhada da publicação', blogs);
    } catch (error: any) {
      switch (error.message) {
        case 'BLOG_NOT_FOUND':
          return notFound('Nenhuma publicação com essa chave foi encontrada');
        default:
          return serverError(error);
      }
    }
  }
}
