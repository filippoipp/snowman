import { Request, Response } from 'express';
import { getRepository, Not } from 'typeorm'

import Post from '../models/Post'
import Following from '../models/Following'

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

    async getUserPosts(req: Request, res: Response) {
        try {
            const repository = getRepository(Post);

            const posts = await repository.find({ where: { user_id: req.params.userid }});
    
            return res.json(posts)
        } catch(err) {
            console.log(err)
            return err
        }

    }

    async getPostsForFeed(req: Request, res: Response) {
        try {
            const followingRepository = getRepository(Following);
            const postRepository = getRepository(Post)
            let posts = []

            const following = await followingRepository.find({ where: { user_id: req.params.userid }});

            for(const follow of following) {
                var temp = await postRepository.find({ where: { user_id: follow.following_id }})

                if(temp.length > 0) {
                    for( const t of temp ) {
                        posts.push(t)
                    }
                }
            }
    
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