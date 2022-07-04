import { Category } from "../models"

export const categoryService = {
    findAllPaginate: async (page: number, perPage: number) => {
        
	    const offset = (page - 1) * perPage

        const { count, rows } = await Category.findAndCountAll({
            order:[['position', 'ASC']],
            attributes:['id','name','position'],
            limit: perPage,
            offset
        })
        return {
            categories: rows,
            page,
            perPage,
            total: count
        }
    }
}