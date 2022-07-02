import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminjs = new AdminJS({
    databases : [sequelize],
    rootPath: '/admin',
    branding: brandingOptions,
    resources: adminJsResources,
    locale: locale,
    dashboard: dashboardOptions
});

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminjs, authenticationOptions, null,{
    resave: false,
    saveUninitialized: false,
});