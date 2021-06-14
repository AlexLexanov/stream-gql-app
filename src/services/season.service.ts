import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeasonEntity } from 'src/models/serial/seasons/season/season.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeasonService {
    constructor(@InjectRepository(SeasonEntity)
    private readonly repository: Repository<SeasonEntity>) {}

    async create(season) {
        return this.repository.save(season)
    }
}
