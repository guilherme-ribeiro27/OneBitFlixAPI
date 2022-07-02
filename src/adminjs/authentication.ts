import { AuthenticationOptions } from "@adminjs/express";
import { User } from "../models";
import bcrypt from "bcrypt";

export const authenticationOptions : AuthenticationOptions = {
    authenticate: async (email, password)=>{
        const user = await User.findOne({where:{email}})

        if(user && user.role === 'admin' && await bcrypt.compare(password, user.password))
            return user;
        return false;
    },
    cookiePassword: 'senha-de-cookie',
}