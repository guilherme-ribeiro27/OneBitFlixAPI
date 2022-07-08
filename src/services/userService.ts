import { User } from "../models";
import { UserCreationAttributes } from "../models/User";

export const userService = {
    // GET /users/:email
    findByEmail : async (email : string) => {
        return await User.findOne({where:{email}})
    },

    // POST /users
    create: async(attributes: UserCreationAttributes) =>{
        return await User.create(attributes);
    }
}