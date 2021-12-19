import { UpdateSection } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { notFound, ok, serverError } from '@/utils/response';

export class UpdateSectionController implements Controller {
  constructor(private readonly updateSection: UpdateSection) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.updateSection.update({
        ...httpRequest.body,
        sectionId: httpRequest.params.sectionId,
        blogId: httpRequest.params.blogId,
      });

      return ok('A seção da publicação foi atualizada', {});
    } catch (error: any) {
      switch (error.message) {
        case 'BLOG_NOT_FOUND':
          return notFound('Nenhuma publicação com essa chave foi encontrada');
        case 'SECTION_NOT_FOUND':
          return notFound('A seção informada não foi encontrada');
        default:
          return serverError(error);
      }
    }
  }
}
