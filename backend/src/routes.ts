import { Router } from 'express'

import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import PostController from './app/controllers/PostController'

import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.post('/posts', authMiddleware, PostController.store)
router.get('/posts', PostController.getAll)

export default router