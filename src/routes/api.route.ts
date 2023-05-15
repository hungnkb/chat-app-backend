import express from 'express';
import userController from '../controllers/user.controller';

const apiRouter = express.Router();

apiRouter.post('/users', userController.create);
apiRouter.get('/users/:key', userController.findByKeyword);

export default apiRouter;
