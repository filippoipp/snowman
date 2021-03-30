import { Request, Response } from 'express';
import { getRepository, Not } from 'typeorm'

import Post from '../models/Post'

class PostController {
    async getAll(req: Request, res: Response) {
        try {
            const repository = getRepository(Post);

            const posts = await repository.find({ where: { visibility: 'public' }});
    
            return res.json(posts)
        } catch(err) {
            console.log(err)
            return err
        }

    }

    async getPostsForFeed(req: Request, res: Response) {
        try {
            const repository = getRepository(Post);

            const posts = await repository.find({ where: { user_id: Not(req.params.id) }});
    
            return res.json(posts)
        } catch(err) {
            console.log(err)
            return err
        }

    }

    async store(req: Request, res: Response) {
        try {
            const repository = getRepository(Post);

            const post = repository.create(req.body)
            await repository.save(post)
    
            return res.json(post)

        } catch(err) {
            console.log(err)
            return err
        }
    }   
}

export default new PostController();