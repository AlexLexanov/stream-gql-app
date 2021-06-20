import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaEntity } from 'src/models/films/cinema/cinema.entity';
import { CinemaMetaEntity } from 'src/models/films/cinema/meta/cinema-meta.entity';
import { CinemaResolver } from 'src/resolvers/cinema.resolver';
import { CinemaService } from 'src/services/cinema.service';
import { UploadService } from 'src/services/upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ CinemaEntity, CinemaMetaEntity ])
  ],
  providers: [ CinemaService, CinemaResolver, UploadService ],
})
export class CinemaModule {}
