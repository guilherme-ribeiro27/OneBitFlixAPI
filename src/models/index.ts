import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";
import {Favorite} from "./Favorite";
import { Like } from "./Like";

Category.hasMany(Course,{as:'courses'})

// Course associations
Course.belongsTo(Category,)
Course.belongsToMany(User,{through:Favorite})
Course.belongsToMany(User,{through:Like})
Course.hasMany(Episode, {as:'episodes'})
Course.hasMany(Favorite, {as:'FavoritesUsers', foreignKey:'course_id'})

// Episode associations
Episode.belongsTo(Course, ) 

// Favorite associations
Favorite.belongsTo(Course)
Favorite.belongsTo(User)

// User associations
User.belongsToMany(Course,{through:Favorite})
User.belongsToMany(Course,{through:Like})
User.hasMany(Favorite, {as:'FavoritesCourses', foreignKey:'user_id'})

export{
    Category,Course,Episode,User,Favorite,Like
}