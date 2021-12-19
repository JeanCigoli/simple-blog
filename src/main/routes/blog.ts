import { createBlogSchema } from '@/validator/usecases';
import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { adaptValidator } from '../adapters/adapt-validator';
import { makeCreateBlog } from '../factories/controller';

export default (routes: Router) => {
  routes.post(
    '/blogs',
    adaptValidator(createBlogSchema),
    adaptRoute(makeCreateBlog()),
  );
};
