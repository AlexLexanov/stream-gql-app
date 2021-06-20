import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class UploadService {
    
    async uploadFilmFiles({ filename, createReadStream }, field) {
        let arrFile = filename.split('.')
        arrFile[0] = Date.now()
        const newFileName = arrFile.join('.')
        await createReadStream()
            .pipe(createWriteStream(`./upload/${field}/${newFileName}`))
            .on('finish', () => true)
            .on('error', (error) => error)
        const path = `/${field}/${newFileName}`
        let obj = {}
        obj[field] = path
        return obj
    }
}
