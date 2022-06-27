import {adminjs, adminJSRouter} from './adminjs/index';
import express from 'express';
import { sequelize } from './database';

const app = express();

app.use(express.static('public'));
app.use(adminjs.options.rootPath, adminJSRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    })
    console.log(`Server is running on port ${PORT}`);
})