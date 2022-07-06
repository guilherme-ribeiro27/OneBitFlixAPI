import { Request, Response } from 'express';
import { getPaginationParams } from '../helpers/getPaginationParams';
import { courseService } from '../services/courseService';

export const coursesController = {
    // GET /courses/featured
    featured: async (req : Request, res : Response) => {

        try {
            const featuredCourses = await courseService.getRandomFeaturedCourses();
            return res.status(200).json(featuredCourses);
        } catch (error) {
            if (error instanceof Error)
            return res.status(400).json({message: error.message})
        }
    },
    // GET /courses/newest
    newest: async (req : Request, res : Response) => {
            
            try {
                const newestCourses = await courseService.getTopTenNewest();
                return res.status(200).json(newestCourses);
            } catch (error) {
                if (error instanceof Error)
                return res.status(400).json({message: error.message})
            }
    },
    // GET /courses/search
    search: async (req : Request, res : Response) => {
        const { name } = req.query;
        const [page,perPage] = getPaginationParams(req.query)
        try {
            if (typeof name !== 'string') throw new Error('parameter name must be string type');
            const courses = await courseService.findByName(name,page,perPage);
            return res.json(courses);
        } catch (error) {
            if (error instanceof Error)
            return res.status(400).json({message: error.message})
        }
    },
    // GET /courses/:id
    show: async (req : Request, res : Response) => {
        const { id } = req.params;

        try {
            const course = await courseService.findByIdWithEpisodes(id);
            return res.json(course)
        } catch (error) {
            if (error instanceof Error)
            return res.status(400).json({message: error.message})
        }
    },
    
}