import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { WatchTime } from "../models";
import { episodeService } from "../services/episodeService";


export const episodesController = {
    // GET /episodes/stream?videoUrl=
    stream : async (req : Request, res : Response) => {
        const { videoUrl } = req.query;

        try {
            if (typeof videoUrl !== "string") throw new Error("Invalid videoUrl");
            
            const range = req.headers.range // bytes=0-10485760

            episodeService.streamEpisodeToResponse(res, videoUrl, range);
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    },
    //GET /episodes/:id/watchtime
    getWatchTime : async (req : AuthenticatedRequest, res : Response) => {
        const userId = req.user!.id
        const episodeId = req.params.id

        try {
            const watchtime = await episodeService.getWatchTime(userId, Number(episodeId))
            return res.status(200).json(watchtime)
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    },
    //POST /episodes/:id/watchtime
    setWatchTime : async (req : AuthenticatedRequest, res : Response) => {
        const userId = req.user!.id
        const episodeId = req.params.id
        const { seconds } = req.body
        try {
            const watchtime = await episodeService.setWatchTime({
                userId,episodeId: Number(episodeId), seconds
            })
            return res.status(200).json(watchtime)
        } catch (error) {
            if (error instanceof Error)
                return res.status(400).json({message: error.message})
        }
    }
}