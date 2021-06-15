import { Injectable } from '@nestjs/common';
import { SectionPageModel, SectionModel } from 'src/models/section/section.model';
import { SectionEntity } from 'src/models/section/section.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class SectionService {

    async create(category): Promise<any> {
        return await getRepository(SectionEntity).save(category)
    }

    async editing(id, data): Promise<any> {
        const editData = JSON.parse(JSON.stringify(data))
        await getConnection()
        .createQueryBuilder()
        .update(SectionEntity)
        .set(editData)
        .where("id = :id", { id })
        .execute()

        return await this.findOne(id)
    }

    async remove(id): Promise<any> {
        let removeCategory = this.findOne(id)
        await getRepository(SectionEntity).delete(id)
        return removeCategory
    }

    async getPages({ page, size }): Promise<any> {
        const [ items, couns ] = await getRepository(SectionEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.cinema', 'cinema')
        .leftJoinAndSelect('category.serial', 'serial')
        .skip((page - 1) * size)
        .take(size)
        .cache(60000)
        .getManyAndCount()        

        return { 
            page,
            size,
            totalPage: Math.floor(couns / size) === 0 ? 1 : Math.round(couns / size),
            items
        }
    }

    async findOne(id): Promise<any> {               
        return await getRepository(SectionEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.cinema', 'cinema')
        .leftJoinAndSelect('category.serial', 'serial')
        .where("category.id = :id", { id })
        .getOne();
    }

    async findAll(): Promise<any> {
        return await getRepository(SectionEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.cinema', 'cinema')
        .leftJoinAndSelect('category.serial', 'serial')
        .cache(60000)
        .getMany()
    }
}
