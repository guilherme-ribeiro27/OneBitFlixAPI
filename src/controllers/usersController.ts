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