import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ==========  Resolvers
import { SectionResolver } from 'src/resolvers/section.resolver';
import { CinemaResolver } from 'src/resolvers/cinema.resolver';
import { SeasonsResolver } from 'src/resolvers/seasons.resolver';
import { SeasonResolver } from 'src/resolvers/season.resolver';
import { SerialResolver } from 'src/resolvers/serial.resolver';

// ==========  Entity
import { SectionEntity } from 'src/models/section/section.entity';
import { CinemaEntity } from 'src/models/films/cinema/cinema.entity';
import { SerialEntity } from 'src/models/films/serial/serial.entity';
import { SeasonEntity } from 'src/models/films/serial/seasons/season/season.entity';
import { SeasonsEntity } from 'src/models/films/serial/seasons/seasons.entity';

// =========  Services
import { SectionService } from '../services/section.service';
import { CinemaService } from 'src/services/cinema.service';
import { SeasonsService } from 'src/services/seasons.service';
import { SeasonService } from 'src/services/season.service';
import { SerialService } from 'src/services/serial.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SectionEntity,
      SerialEntity,
      CinemaEntity,
      SeasonsEntity,
      SeasonEntity
    ]),
  ],
  providers: [
    SectionService,
    SectionResolver,
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
export class SectionModule {}
