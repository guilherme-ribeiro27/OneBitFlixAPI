import { Response } from "express"
import { AuthenticatedRequest } from "../middlewares/auth"
import { favoriteServices } from "../services/favoriteService"

export const favoritesController = {
    //POST /favorites
    save: async(req: AuthenticatedRequest, res: Response)=>{
        const userId = req.user!.id
        const {courseId} = req.body

        try {
            const favorite = await favoriteServices.create(userId, Number(courseId))
            return res.status(201).json(favorite)
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    }
}