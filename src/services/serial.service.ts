import { Injectable, UnauthorizedException } from '@nestjs/common';
import { getRepository } from 'typeorm';

import { FilmsModel } from 'src/models/films/films.model';
import { SerialEntity } from 'src/models/films/serial/serial.entity';

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

    async findOne(id): Promise<FilmsModel> {
        const find = await getRepository(SerialEntity)
        .createQueryBuilder()
        .where("id = :id", { id })
        .getOne();

        if (!Boolean(find)) throw new UnauthorizedException(`Не найдено с данным id ${id}`); 
        return find
    }

    async findAll(): Promise<FilmsModel | any> {
        return await getRepository(SerialEntity).find()
    }
}
