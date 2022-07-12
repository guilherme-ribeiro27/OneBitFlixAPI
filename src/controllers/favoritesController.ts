import { Response } from "express"
import { AuthenticatedRequest } from "../middlewares/auth"
import { favoriteServices } from "../services/favoriteService"

export const favoritesController = {
    //GET /favorites
    index: async(req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        try {
            const favorites = await favoriteServices.findByUserId(userId)
            return res.json(favorites).status(200)
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }

    },
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
    },
    //DELETE /favorites/:id
    delete: async(req: AuthenticatedRequest, res: Response)=>{
        const userId = req.user!.id
        const courseId = req.params.id

        try {
            await favoriteServices.delete(userId, Number(courseId))
            return res.status(204).send()
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    }
}