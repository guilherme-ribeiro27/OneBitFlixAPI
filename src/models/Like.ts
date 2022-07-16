import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Like{
    userId: number,
    courseId: number,

}

export interface LikeInstance extends Model<Like>, Like {

}

export const Like = sequelize.define<LikeInstance, Like>('Like',{
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