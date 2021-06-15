import { Injectable } from '@nestjs/common';
import { CinemaEntity } from 'src/models/films/cinema/cinema.entity';
import { getRepository } from 'typeorm';
import { FilmsModel } from 'src/models/films/films.model';

@Injectable()
export class CinemaService {

    async create(cinema): Promise<FilmsModel> {        
        return await getRepository(CinemaEntity).save(cinema)
    }

    async editing(id, data): Promise<any> {
        const editData = JSON.parse(JSON.stringify(data))

        await getRepository(CinemaEntity)
        .createQueryBuilder()
        .update(CinemaEntity)
        .set(editData)
        .where('id = :id', { id })
        .execute()

        return await this.findOne(id)
    }

    async remove(id): Promise<FilmsModel> {
        const removeCinema = await this.findOne(id)
        await getRepository(CinemaEntity).delete(id)
        return removeCinema
    }

    async findOne(id): Promise<any> {
        return await getRepository(CinemaEntity)
        .createQueryBuilder()
        .where("id = :id", { id })
        .getOne();
    }

    async findAll(): Promise<any> {
        return await getRepository(CinemaEntity).find()
    }
}
