import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { FilmsModel } from 'src/models/films/films.model';
import { CinemaService } from 'src/services/cinema.service';
import { UploadService } from 'src/services/upload.service';
import { FilmsInputCreate, FilmsInputUpload } from 'src/models/films/films.input';

@Resolver(() => FilmsModel)
export class CinemaResolver {
  constructor(private readonly service: CinemaService,
              private readonly upload: UploadService) {}

  @Mutation(() => FilmsModel, { name: 'addCinema' })
  async create(@Args('cinema') cinema: FilmsInputCreate): Promise<FilmsModel> {
    return await this.service.create(cinema);
  }

  @Mutation(() => FilmsModel, { name: 'editingCinema' })
  async editing(
    @Args('id') id: number,
    @Args('cinema') cinema: FilmsInputCreate,
  ): Promise<FilmsModel> {
    return await this.service.editing(id, cinema);
  }

  @Mutation(() => FilmsModel, { name: 'removeCinema' })
  async remove(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.remove(id);
  }

  @Mutation(() => Boolean, { name: 'uploadFileCinema' })
  async uploadFile(@Args('input') { id, file, field }: FilmsInputUpload): Promise<Boolean> {
    const fieldUrl = await this.upload.uploadFilmFiles(await file, field)
    await this.service.editing(id, fieldUrl)
    return true
  }

  @Query(() => FilmsModel, { name: 'getCinemaById' })
  async getOne(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.findOne(id);
  }

  @Query(() => [FilmsModel], { name: 'getCinemaAll' })
  async getAll(): Promise<FilmsModel[]> {
    return await this.service.findAll();
  }
}
