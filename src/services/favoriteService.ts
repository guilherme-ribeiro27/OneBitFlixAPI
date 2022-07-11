import { Favorite } from "../models"

export const favoriteServices = {
    create: async(userId: number, courseId: number) => {
        
        const favorite = Favorite.create({
            userId,
            courseId
        })

        return favorite
    }
}