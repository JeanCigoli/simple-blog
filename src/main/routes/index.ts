import { Router } from 'express';

export default (routes: Router) => {
  routes.get('/', (_, res) => {
    return res.json({
      message: 'API blog is on!',
    });
  });
};
