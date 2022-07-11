import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";
import { CourseInstance } from "./Course";
import { UserInstance } from "./User";

export interface Favorite {
    userId: number;
    courseId: number;
}

export interface FavoriteInstace extends Model<Favorite>, Favorite {
    course?: CourseInstance
    user?: UserInstance;
}

export const Favorite = sequelize.define<FavoriteInstace, Favorite>('Favorite', {
    userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model:  'users',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model:  'courses',
            key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
    },
})