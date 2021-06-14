import { Injectable } from '@nestjs/common';
import { CategoriesPageModel, CategoriesModel } from 'src/models/categories/categories.model';
import { CategoriesEntity } from 'src/models/categories/categories.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor() {}

    async create(category): Promise<CategoriesModel> {
        return await getRepository(CategoriesEntity).save(category)
    }

    async editing(id, data): Promise<CategoriesModel> {
        const editData = JSON.parse(JSON.stringify(data))
        await getConnection()
        .createQueryBuilder()
        .update(CategoriesEntity)
        .set(editData)
        .where("id = :id", { id })
        .execute()

        return await this.findOne(id)
    }

    async remove(id): Promise<CategoriesModel> {
        let removeCategory = this.findOne(id)
        await getRepository(CategoriesEntity).delete(id)
        return removeCategory
    }

    async getPages({ page, size }): Promise<CategoriesPageModel> {
        const [ items, couns ] = await getRepository(CategoriesEntity)
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

    async findOne(id): Promise<CategoriesModel> {               
        return await getRepository(CategoriesEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.cinema', 'cinema')
        .leftJoinAndSelect('category.serial', 'serial')
        .where("category.id = :id", { id })
        .getOne();
    }

    async findAll(): Promise<CategoriesModel[]> {
        return await getRepository(CategoriesEntity)
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.cinema', 'cinema')
        .leftJoinAndSelect('category.serial', 'serial')
        .cache(60000)
        .getMany()
    }
}
