import { ListAllCategory } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { ok, serverError } from '@/utils/response';

export class ListAllCategoriesController implements Controller {
  constructor(private readonly listAllCategory: ListAllCategory) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const categories = await this.listAllCategory.listAll();

      return ok('Listagem de categorias', categories);
    } catch (error: any) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
