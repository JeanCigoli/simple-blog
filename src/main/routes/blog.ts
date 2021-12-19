import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeCreateBlog } from '../factories/controller';

export default (routes: Router) => {
  routes.post('/blogs', adaptRoute(makeCreateBlog()));
};
