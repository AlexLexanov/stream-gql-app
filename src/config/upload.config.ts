import { Injectable } from "@nestjs/common";
import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as path from "path";


@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions  {    
    return { dest: './upload',
             storage: diskStorage({
             destination (req, file, callback) {
               console.log(req, file, callback);
               
               const fileExtName = path.extname(file.originalname);
               const format = ['.webp', '.mp4']
               if (format.includes(fileExtName)) callback(null, `upload/${file.fieldname}/`)
                else callback(new Error('Format file'), null)
             },
            filename(req, file, callback) {
              console.log(req, file, callback);
              const fileExtName = path.extname(file.originalname);
              callback(null, `${Date.now()}${fileExtName}`);
           }
        })
    };
  }
}
