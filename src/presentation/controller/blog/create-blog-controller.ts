import { CreateBlog } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { conflict, created, notFound, serverError } from '@/utils/response';

export class CreateBlogController implements Controller {
  constructor(private readonly createBlog: CreateBlog) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.createBlog.create(httpRequest.body);

      return created('Sua publicação foi adicionada no blog', {});
    } catch (error: any) {
      switch (error.message) {
        case 'BLOG_EXIST':
          return conflict('Ops! já existe um blog com esse título');
        case 'CATEGORY_NOT_FOUND':
          return notFound('A categoria informada não foi encontrada');
        default:
          return serverError(error);
      }
    }
  }
}
