import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeasonModel } from 'src/models/season.model';
import { Repository } from 'typeorm';

@Injectable()
export class SeasonService {
    constructor(@InjectRepository(SeasonModel)
    private readonly repository: Repository<SeasonModel>) {}

    async create(season) {
        return this.repository.save(season)
    }
}
