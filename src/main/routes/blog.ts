import {
  createBlogSchema,
  deleteBlogSchema,
  listAllBlogsSchema,
  listBlogByIdSchema,
  updateBlogSchema,
} from '@/validator/usecases';
import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { adaptValidator } from '../adapters/adapt-validator';
import {
  makeCreateBlog,
  makeDeleteBlog,
  makeListAllBlogs,
  makeListBlogById,
  makeUpdateBlog,
} from '../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/blogs',
    adaptValidator(createBlogSchema),
    adaptRoute(makeCreateBlog()),
  );

  routes.get(
    '/blogs',
    adaptValidator(listAllBlogsSchema),
    adaptRoute(makeListAllBlogs()),
  );

  routes.get(
    '/blogs/:id',
    adaptValidator(listBlogByIdSchema),
    adaptRoute(makeListBlogById()),
  );

  routes.put(
    '/blogs/:id',
    adaptValidator(updateBlogSchema),
    adaptRoute(makeUpdateBlog()),
  );

  routes.delete(
    '/blogs/:id',
    adaptValidator(deleteBlogSchema),
    adaptRoute(makeDeleteBlog()),
  );
};
