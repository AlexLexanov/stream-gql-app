import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeasonsEntity } from 'src/models/serial/seasons/seasons.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeasonsService {
    // constructor(@InjectRepository(SeasonsModel)
    // private readonly repository: Repository<SeasonsModel>) {}

    // async create(seasons) {
    //     return await this.repository.save(seasons)
    // }
}
