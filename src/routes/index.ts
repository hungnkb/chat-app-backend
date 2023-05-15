import apiRouter from './api.route';
import { Express } from 'express';

const route = (app: Express) => {
  app.use('/api', apiRouter);
};

export default route;
