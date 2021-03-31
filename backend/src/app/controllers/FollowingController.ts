import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import Following from '../models/Following'

class FollowingController {
    async store(req: Request, res: Response) {
        try {
            const repository = getRepository(Following);

            const following = repository.create(req.body)

            await repository.save(following)
    
            return res.json(following)

        } catch(err) {
            console.log(err)
            return err
        }
    }
    
    async verify(req: Request, res: Response) {
        try {
            const repository = getRepository(Following);

            const following = await repository.find({ where: { user_id: req.params.userid, following_id: req.params.followingid }});
            
            if(following.length > 0) {
                return res.json(true)
            } else {
                return res.json(false)
            }

        } catch(err) {
            console.log(err)
            return err
        }
    }

    async unfollow(req: Request, res: Response) {
        try {
            const repository = getRepository(Following);

            const following = await repository.find({ where: { user_id: req.params.userid, following_id: req.params.followingid }});

            await repository.remove(following)
            
            return res.json(following)       

        } catch(err) {
            console.log(err)
            return err
        }
    }
}

export default new FollowingController();