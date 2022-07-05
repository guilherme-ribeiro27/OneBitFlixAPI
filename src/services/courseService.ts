import { Course } from "../models";

export const courseService = {
    findByIdWithEpisodes : async (id: string) => {
        
        const courseWithEpisode = await Course.findByPk(id, {
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url','thumbnailUrl'],
            ],
            include: {
                association : 'episodes',
                attributes : [
                    'id',
                    'name',
                    'synopsis',
                    'order',
                    ['video_url','videoUrl'],
                    ['seconds_long','secondsLong'],
                ],
                order: [['order','ASC']],
                separate: true, // separate determines that the include will be loaded separately from the main query
            }
        });

        return courseWithEpisode;
    },
    getRandomFeaturedCourses: async ()=>{
        const featuredCourses = await Course.findAll({
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url','thumbnailUrl'],
            ],
            where: {
                featured: true
            }
        })
        const randomFeaturedCourses = featuredCourses.sort((a,b)=>0.5 - Math.random());
        return randomFeaturedCourses.slice(0,3)
    },
    getTopTenNewest: async ()=>{
        const topTenCourses = await Course.findAll({
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url','thumbnailUrl'],
            ],
            order:[['created_at','DESC']],
            limit: 10
        })
        return topTenCourses
    }
}