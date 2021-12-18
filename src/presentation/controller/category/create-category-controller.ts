import { CreateCategory } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { conflict, created, serverError } from '@/utils/response';

export class CreateCategoryController implements Controller {
  constructor(private readonly createCategory: CreateCategory) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name } = httpRequest.body;

      const category = await this.createCategory.create({ name });

      return created('Categoria criada com sucesso!', category);
    } catch (error: any) {
      switch (error.message) {
        case 'CATEGORY_EXIST':
          conflict('Ops, já possui uma categoria cadastrada com esse nome');
        default:
          return serverError(error);
      }
    }
  }
}
