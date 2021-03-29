import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import Post from '../models/Post'

class PostController {
    async getAll(req: Request, res: Response) {
        try {
            const repository = getRepository(Post);

            const posts = await repository.find();
    
            return res.json(posts)
        } catch(err) {
            console.log(err)
            return err
        }

    }

    async store(req: Request, res: Response) {
        const repository = getRepository(Post);

        const post = repository.create(req.body)
        await repository.save(post)

        return res.json(post)
    }   
}

export default new PostController();