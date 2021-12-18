import { ListAllCategories } from '@/domain/usecases';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/protocols';
import { ok, serverError } from '@/utils/response';

export class ListAllCategoriesController implements Controller {
  constructor(private readonly ListAllCategories: ListAllCategories) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const categories = await this.ListAllCategories.listAll();

      return ok('Listagem de categorias', categories);
    } catch (error: any) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
