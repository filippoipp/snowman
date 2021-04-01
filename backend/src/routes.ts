import { Router } from 'express'

import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
import PostController from './app/controllers/PostController'
import FollowingController from './app/controllers/FollowingController'

import authMiddleware from './app/middlewares/authMiddleware';

const router = Router();

router.post('/users', UserController.store);
router.get('/users/:id/:name?', authMiddleware, UserController.getUsers);
router.post('/auth', AuthController.authenticate);
router.post('/posts', authMiddleware, PostController.store)
router.get('/posts', PostController.getAll)
router.get('/posts-feed/:userid', authMiddleware, PostController.getPostsForFeed)
router.post('/following', authMiddleware, FollowingController.store)
router.get('/verify-following/:userid/:followingid', authMiddleware, FollowingController.verify)
router.delete('/unfollow/:userid/:followingid', authMiddleware, FollowingController.unfollow)

export default router