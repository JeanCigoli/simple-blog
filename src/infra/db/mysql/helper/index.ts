import { DATABASE } from '@/utils/constants';
import knex from 'knex';

export const dbBlog = knex({
  client: DATABASE.DIALECT,
  connection: {
    host: DATABASE.HOST,
    user: DATABASE.USERNAME,
    password: DATABASE.PASSWORD,
    database: DATABASE.NAME,
  },
});
