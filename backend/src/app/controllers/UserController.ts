import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import User from '../models/User'

class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);

        const userExists = await repository.findOne({ where: { email: req.body.name.email }});

        if(userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ name: req.body.name.name,  email: req.body.name.email, password: req.body.name.password })
        await repository.save(user)

        return res.json(user)
    }   
}

export default new UserController();