import { ListAllCategoriesRepository } from '@/data/protocols/db';
import { dbBlog } from './helper';

export class CategoryRepository implements ListAllCategoriesRepository {
  findAll(): ListAllCategoriesRepository.Result {
    return dbBlog('blog.tb_category').select('*');
  }
}
