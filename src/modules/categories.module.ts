import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ========== 
import { CategoriesResolver } from 'src/resolvers/categories.resolver';
import { CinemaResolver } from 'src/resolvers/cinema.resolver';
import { SeasonsResolver } from 'src/resolvers/seasons.resolver';
import { SeasonResolver } from 'src/resolvers/season.resolver';

// ==========
import { CategoriesEntity } from 'src/models/categories/categories.entity';
import { SeasonsModel } from 'src/models/seasons.model';
import { CinemaEntity } from 'src/models/cinema/cinema.entity';
import { SeasonModel } from 'src/models/season.model';

// =========
import { CategoriesService } from '../services/categories.service';
import { CinemaService } from 'src/services/cinema.service';
import { SeasonsService } from 'src/services/seasons.service';
import { SeasonService } from 'src/services/season.service';
import { SerialModel } from 'src/models/serial.model';
import { SerialService } from 'src/services/serial.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoriesEntity,
      SerialModel,
      CinemaEntity,
      SeasonsModel,
      SeasonModel
    ]),
  ],
  providers: [
    CategoriesService,
    CategoriesResolver,
    CinemaService,
    CinemaResolver,
    SerialService,
    SeasonsService,
    SeasonsResolver,
    SeasonService,
    SeasonResolver
  ],
})
export class CategoriesModule {}
