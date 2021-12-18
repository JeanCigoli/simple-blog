import errorLogger from '../utils/logger';
import { SERVER } from '../utils/constants';
import { server } from './application';

(async () => {
  try {
    server.listen(SERVER.PORT, async () => {
      console.log(`Server is running on port: ${SERVER.PORT}`);
    });
  } catch (error) {
    errorLogger(error);
  }
})();
