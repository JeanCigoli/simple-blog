import { createBlogSchema, listAllBlogsSchema } from '@/validator/usecases';
import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { adaptValidator } from '../adapters/adapt-validator';
import { makeCreateBlog, makeListAllBlogs } from '../factories/controller';

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
};
