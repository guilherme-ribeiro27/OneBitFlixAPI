import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";

export interface AuthenticatedRequest extends Request{
    user?: UserInstance | null
}

export function ensureAuth(req: AuthenticatedRequest, res : Response, next : NextFunction){
    const authorizationHeader = req.headers.authorization 

    if(!authorizationHeader) return res.status(401).send({error: 'No token provided'})

    const token = authorizationHeader.replace(/Bearer /, '')

    jwtService.verifyToken(token, (err, decoded)=>{
        // (err || typeof decoded === 'undefined') ? res.status(401).send({error: 'Invalid token'}) 
        // : 
        // userService.findByEmail((decoded as JwtPayload).email).then(user => {
        //     req.user = user;
        //     next()
        // })

        if(err || typeof decoded === 'undefined') 
            return res.status(401).send({error: 'Invalid token',decoded: typeof decoded})

        userService.findByEmail((decoded as JwtPayload).email).then(user => {
            req.user = user;
            next()
        })
    })
}