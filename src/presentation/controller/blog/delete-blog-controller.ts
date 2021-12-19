import { DeleteBlog } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { notFound, ok, serverError } from '@/utils/response';

export class DeleteBlogController implements Controller {
  constructor(private readonly deleteBlog: DeleteBlog) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.deleteBlog.delete({
        id: httpRequest.params.id,
      });

      return ok('A publicação foi desativada', {});
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
