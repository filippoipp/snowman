import { Request, Response } from 'express';
import { getRepository, Not, Like } from 'typeorm'

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

    async getUser(req: Request, res: Response) {
        try {
            const repository = getRepository(User);

            const user = await repository.findOne({ where: { id: req.params.id }})

            return res.json(user)
        } catch(err) {
            console.log(err)
            return err
        }
    }
    
    async getUsers(req: Request, res: Response) {
        try {
            const repository = getRepository(User);
            let users

            if(req.params.name) {
                users = await repository.find({ where: { id: Not(req.params.id), name: Like(`%${req.params.name}%`)}});
            } else {
                users = await repository.find({ where: { id: Not(req.params.id) }});
            }
    
            return res.json(users)
        } catch(err) {
            console.log(err)
            return err
        }

    }
}

export default new UserController();