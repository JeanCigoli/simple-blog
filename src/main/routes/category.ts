import { createCategorySchema } from '@/validator/usecases';
import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { adaptValidator } from '../adapters/adapt-validator';
import {
  makeCreateCategory,
  makeListAllCategories,
} from '../factories/controller';

export default (routes: Router) => {
  routes.get('/categories', adaptRoute(makeListAllCategories()));

  routes.post(
    '/categories',
    adaptValidator(createCategorySchema),
    adaptRoute(makeCreateCategory()),
  );
};
