import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
    // GET /users/current
    show: async( req: AuthenticatedRequest, res: Response ) => {
        const currentUser = req.user!;

        try {
            return res.json(currentUser);
        } catch (error) {
            if(error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    },
    //PUT /users/current
    update: async( req: AuthenticatedRequest, res: Response ) => {
        const currentUser = req.user!;
        const { firstName, lastName, phone, birth, email } = req.body;

        try {
            const updatedUser = await userService.update(currentUser.id, { firstName, lastName, phone, birth, email });
            return res.json(updatedUser);
        } catch (error) {
            if(error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    },
    //PUT /users/current/password
    updatePassword: async( req: AuthenticatedRequest, res: Response ) => {
        const user = req.user!;
        const { currentPassword, newPassword } = req.body;
        user.checkPassword(currentPassword, async(err, isSame)=>{
            try {
                if(err) return res.json({ message:err.message}).status(400)
                if(!isSame) return res.json({ message:"Incorrect password"}).status(400)

                await userService.updatePassword(user.id, newPassword);

                return res.status(204).send()
            } catch (error) {
                if(error instanceof Error)
                    return res.status(400).json({message: error.message})
            } 
        })
    },
    //GET /users/current/watching
    watching: async(req: AuthenticatedRequest, res: Response)=>{
        const userId = req.user!.id;

        try {
            const watching = await userService.getKeepWatichingList(userId);
            return res.json(watching);
        } catch (error) {
            if(error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    },
    
}