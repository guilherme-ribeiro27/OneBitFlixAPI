import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path, { dirname } from "path";
import { buffer } from "stream/consumers";

export const courseResourceOptions : ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name','synopsis','uploadThumbanail','featured','categoryId'],
    filterProperties: ['name','synopsis','featured','categoryId','createdAt','updatedAt'],
    listProperties: ['id','name','featured','categoryId'],
    showProperties: ['id','name','synopsis','uploadThumbanail','featured','categoryId','createdAt','updatedAt'],
}

export const courseResourcesFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local:{
                bucket: path.join(__dirname,'..','..','..','public')
            }
        },
        properties:{
            key: 'thumbnailUrl',
            file: 'uploadThumbanail',
        },
        uploadPath: (record,filename)=> `thumbnails/course-${record.get('id')}/${filename}`
    })
]