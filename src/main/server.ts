import errorLogger from '../utils/logger';
import { SERVER } from '../utils/constants';
import { server } from './application';
import { dbBlog } from '@/infra/db/mysql/helper';

(async () => {
  try {
    await dbBlog.raw('SELECT 1');

    server.listen(SERVER.PORT, async () => {
      console.log(`Server is running on port: ${SERVER.PORT}`);
    });
  } catch (error) {
    errorLogger(error);
  }
})();
