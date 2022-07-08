import { Request,Response } from "express"
import { userService } from "../services/userService";

export const authController = {
    register: async (req: Request, res: Response) => {
        const { firstName, lastName, email, password, birth, phone } = req.body;
        try{
            const userAlreadyExists = await userService.findByEmail(email);

            if (userAlreadyExists) throw new Error('Este email já está sendo usado');
            const user = await userService.create({ 
                firstName, lastName, email, password, birth, phone, role:'user'
            });

            return res.status(201).json(user);
        }catch(error){
            if(error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    }
}