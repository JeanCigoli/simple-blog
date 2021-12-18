import { ListAllCategoryRepository } from '@/data/protocols/db';
import { dbBlog } from './helper';

export class CategoryRepository implements ListAllCategoryRepository {
  findAll(): ListAllCategoryRepository.Result {
    return dbBlog('blog.tb_category').select('*');
  }
}
