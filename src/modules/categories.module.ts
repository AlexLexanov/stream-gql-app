import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ==========  Resolvers
import { CategoriesResolver } from 'src/resolvers/categories.resolver';
import { CinemaResolver } from 'src/resolvers/cinema.resolver';
import { SeasonsResolver } from 'src/resolvers/seasons.resolver';
import { SeasonResolver } from 'src/resolvers/season.resolver';
import { SerialResolver } from 'src/resolvers/serial.resolver';

// ==========  Entity
import { CategoriesEntity } from 'src/models/categories/categories.entity';
import { SeasonsEntity } from 'src/models/serial/seasons/seasons.entity';
import { CinemaEntity } from 'src/models/cinema/cinema.entity';
import { SeasonEntity } from 'src/models/serial/seasons/season/season.entity';

// =========  Services
import { CategoriesService } from '../services/categories.service';
import { CinemaService } from 'src/services/cinema.service';
import { SeasonsService } from 'src/services/seasons.service';
import { SeasonService } from 'src/services/season.service';
import { SerialEntity } from 'src/models/serial/serial.entity';
import { SerialService } from 'src/services/serial.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoriesEntity,
      SerialEntity,
      CinemaEntity,
      SeasonsEntity,
      SeasonEntity
    ]),
  ],
  providers: [
    CategoriesService,
    CategoriesResolver,
    CinemaService,
    CinemaResolver,
    SerialService,
    SerialResolver,
    SeasonsService,
    SeasonsResolver,
    SeasonService,
    SeasonResolver
  ],
})
export class CategoriesModule {}
