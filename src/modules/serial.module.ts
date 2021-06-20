import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//===================
import { SeasonEntity } from 'src/models/films/serial/seasons/season/season.entity';
import { SeasonsEntity } from 'src/models/films/serial/seasons/seasons.entity';
import { SerialEntity } from 'src/models/films/serial/serial.entity';

//===================
import { SeasonResolver } from 'src/resolvers/season.resolver';
import { SeasonsResolver } from 'src/resolvers/seasons.resolver';
import { SerialResolver } from 'src/resolvers/serial.resolver';

//===================
import { SeasonService } from 'src/services/season.service';
import { SeasonsService } from 'src/services/seasons.service';
import { SerialService } from 'src/services/serial.service';
import { UploadService } from 'src/services/upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SerialEntity, SeasonsEntity, SeasonEntity]),
  ],
  providers: [
    SerialService,
    SerialResolver,
    SeasonsService,
    SeasonsResolver,
    SeasonService,
    SeasonResolver,
    UploadService
  ],
})
export class SerialModule {}
