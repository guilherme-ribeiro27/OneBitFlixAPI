import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { Category, Course, Episode, User } from "../models";
import bcrypt from 'bcrypt';
import { locale } from "./locale";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminjs = new AdminJS({
    databases : [sequelize],
    rootPath: '/admin',
    branding:{
        companyName: 'OneBitFlix',
        logo: '/onebitflix.svg',
        theme: {
            colors: {
                primary100: '#ff0043',
                primary80: '#ff1a57',
                primary60: '#ff3369',
                primary40: '#ff4d7c',
                    primary20: '#ff668f',
                grey100: '#151515',
                grey80: '#333333',
                grey60: '#4d4d4d',
                grey40: '#666666',
                grey20: '#dddddd',
                filterBg: '#333333',
                accent: '#151515',
                hoverBg: '#151515',
            }
        },
    },
    resources: adminJsResources,
    locale: locale,
    dashboard: {
        component: AdminJS.bundle("./components/Dashboard"),
        handler: async(req,res,context) =>{
            const courses = await Course.count()
            const episodes = await Episode.count()
            const categories = await Category.count()
            const standardUsers = await User.count({where:{role: 'user'}})

            res.json({
                'Cursos': courses,
                'Episodios': episodes,
                'Categorias': categories,
                'Usuarios': standardUsers,
            })
        }
    }
});

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminjs,{
    authenticate: async (email, password)=>{
        const user = await User.findOne({where:{email}})

        if(user && user.role === 'admin' && await bcrypt.compare(password, user.password))
            return user;
        return false;
    },
    cookiePassword: 'senha-de-cookie',
}, null,{
    resave: false,
    saveUninitialized: false,
});