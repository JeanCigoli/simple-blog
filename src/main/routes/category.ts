import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import {
  makeCreateCategory,
  makeListAllCategories,
} from '../factories/controller';

export default (routes: Router) => {
  routes.get('/categories', adaptRoute(makeListAllCategories()));

  routes.post('/categories', adaptRoute(makeCreateCategory()));
};
