import { ResourceOptions } from "adminjs";

export const courseResourceOptions : ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name','synopsis','uploadThumbanail','featured','categoryId'],
    filterProperties: ['name','synopsis','featured','categoryId','createdAt','updatedAt'],
    listProperties: ['id','name','featured','categoryId'],
    showProperties: ['id','name','synopsis','uploadThumbanail','featured','categoryId','createdAt','updatedAt'],
}