import { UpdateBlog } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { notFound, ok, serverError } from '@/utils/response';

export class UpdateBlogController implements Controller {
  constructor(private readonly updateBlog: UpdateBlog) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.updateBlog.update({
        ...httpRequest.body,
        externalId: httpRequest.params.id,
      });

      return ok('A publicação foi atualizada', {});
    } catch (error: any) {
      switch (error.message) {
        case 'BLOG_NOT_FOUND':
          return notFound('Nenhuma publicação com essa chave foi encontrada');
        case 'CATEGORY_NOT_FOUND':
          return notFound('A categoria informada não foi encontrada');
        default:
          return serverError(error);
      }
    }
  }
}
