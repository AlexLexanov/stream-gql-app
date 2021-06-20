import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ==========  Resolvers
import { SectionResolver } from 'src/resolvers/section.resolver';

// ==========  Entity
import { SectionEntity } from 'src/models/section/section.entity';

// =========  Services
import { SectionService } from '../services/section.service';
import { CinemaModule } from './cinema.module';
import { SerialModule } from './serial.module';

@Module({
  imports: [
    CinemaModule,
    SerialModule,
    TypeOrmModule.forFeature([ SectionEntity ]),
  ],
  providers: [ SectionService, SectionResolver ],
})
export class SectionModule {}
