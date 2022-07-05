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
    }
}