import jwt from 'jsonwebtoken';

const secret = 'chave-do-secret' // this will be changed in production

export const jwtService = {
    signToken: (payload : string | object | Buffer, expiration : string) => 
    jwt.sign(payload,secret,{expiresIn: expiration})
}