import { Injectable } from '@nestjs/common';
import { SerialEntity } from 'src/models/serial/serial.entity';
import { SerialModel } from 'src/models/serial/serial.model';
import { getRepository } from 'typeorm';

@Injectable()
export class SerialService {

    async create(serial): Promise<SerialModel> {        
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

    async remove(id): Promise<SerialModel> {
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
