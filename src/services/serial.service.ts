import { Injectable } from '@nestjs/common';
import { FilmsModel } from 'src/models/films/films.model';
import { SerialEntity } from 'src/models/films/serial/serial.entity';

import { getRepository } from 'typeorm';

@Injectable()
export class SerialService {

    async create(serial): Promise<FilmsModel> {        
        return await getRepository(SerialEntity).save(serial)
    }

    async editing(id, data): Promise<any> {
        const editData = JSON.parse(JSON.stringify(data))

        await getRepository(SerialEntity)
        .createQueryBuilder()
        .update(SerialEntity)
        .set(editData)
        .where('id = :id', { id })
        .execute()

        return await this.findOne(id)
    }

    async remove(id): Promise<FilmsModel> {
        const removeCinema = await this.findOne(id)
        await getRepository(SerialEntity).delete(id)
        return removeCinema
    }

    async findOne(id): Promise<any> {
        return await getRepository(SerialEntity)
        .createQueryBuilder()
        .where("id = :id", { id })
        .getOne();
    }

    async findAll(): Promise<any> {
        return await getRepository(SerialEntity).find()
    }
}
