import {adminjs, adminJSRouter} from './adminjs/index';
import cors from 'cors';
import express from 'express';
import { sequelize } from './database';
import {router} from './routes'

const app = express();

app.use(cors())

app.use(express.static('public'));

app.use(express.json())

app.use(adminjs.options.rootPath, adminJSRouter);

app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    })
    console.log(`Server is running on port ${PORT}`);
})