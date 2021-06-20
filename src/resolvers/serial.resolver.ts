import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { FilmsModel } from 'src/models/films/films.model';
import { SerialService } from 'src/services/serial.service';
import { UploadService } from 'src/services/upload.service';
import { FilmsInputCreate, FilmsInputUpload } from 'src/models/films/films.input';

@Resolver(() => FilmsModel)
export class SerialResolver {
  constructor(private readonly service: SerialService,
              private readonly upload: UploadService) {}

  @Mutation(() => FilmsModel, { name: 'addSerial' })
  async create(@Args('serial') serial: FilmsInputCreate): Promise<FilmsModel> {
    return await this.service.create(serial);
  }

  @Mutation(() => FilmsModel, { name: 'editingSerial' })
  async editing(@Args('id') id: number, @Args('serial') serial: FilmsInputCreate): Promise<FilmsModel> {
    return await this.service.editing(id, serial);
  }

  @Mutation(() => FilmsModel, { name: 'removeSerial' })
  async remove(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.remove(id);
  }

  @Mutation(() => Boolean, { name: 'uploadFileSerial' })
  async uploadFile(@Args('input') { id, file, field }: FilmsInputUpload): Promise<Boolean> {
    const fieldUrl = await this.upload.uploadFilmFiles(await file, field)
    await this.service.editing(id, fieldUrl)
    return true
  }

  @Query(() => FilmsModel, { name: 'getSerialById' })
  async getOne(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.findOne(id)
  }

  @Query(() => [FilmsModel], { name: 'getSerialAll' })
  async getAll(): Promise<FilmsModel[]> {
    return await this.service.findAll()
  }
}
