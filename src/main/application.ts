import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(helmet());
server.use(json());
server.use(express.urlencoded({ extended: true }));

export { server };
