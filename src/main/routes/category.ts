import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeListAllCategories } from '../factories/controller';

export default (routes: Router) => {
  routes.get('/categories', adaptRoute(makeListAllCategories()));
};
