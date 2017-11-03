import express from 'express';
import cookieParser from 'cookie-parser';
import moment from 'moment';

import cors from './middlewares/cors';
import delay from './middlewares/delay';
import randomCrash from './middlewares/random-crash';

import index from './routes/index';
import single from './routes/single';

export default (data) => {
  const server = express();

  server.use(cookieParser());
  server.use(cors);
  server.use(delay);
  server.use(randomCrash);

  server.get('/:id', single(data));
  server.get('/', index(data));

  return server;
};
