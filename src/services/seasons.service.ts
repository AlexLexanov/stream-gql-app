import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeasonsModel } from 'src/models/seasons.model';
import { Repository } from 'typeorm';

@Injectable()
export class SeasonsService {
    // constructor(@InjectRepository(SeasonsModel)
    // private readonly repository: Repository<SeasonsModel>) {}

    // async create(seasons) {
    //     return await this.repository.save(seasons)
    // }
}
