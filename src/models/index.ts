import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

Category.hasMany(Course,{as:'courses'})
Course.belongsTo(Category,)

Course.hasMany(Episode)
Episode.belongsTo(Course) // Episodes is the default name for the foreign key
export{
    Category,Course,Episode,User
}