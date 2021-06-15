import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FilmsInputCreate } from 'src/models/films/films.input';
import { FilmsModel } from 'src/models/films/films.model';
import { CinemaService } from 'src/services/cinema.service';

@Resolver(() => FilmsModel)
export class CinemaResolver {
  constructor(private readonly service: CinemaService) {}

  @Mutation(() => FilmsModel, { name: 'addCinema' })
  async create(@Args('cinema') cinema: FilmsInputCreate): Promise<FilmsModel> {
    return await this.service.create(cinema);
  }

  @Mutation(() => FilmsModel, { name: 'editingCinema' })
  async editing(@Args('id') id: number, @Args('cinema') cinema: FilmsInputCreate): Promise<FilmsModel> {
    return await this.service.editing(id, cinema);
  }

  @Mutation(() => FilmsModel, { name: 'removeCinema' })
  async remove(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.remove(id);
  }

  @Query(() => FilmsModel, { name: 'getCinemaById' })
  async getOne(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.findOne(id)
  }

  @Query(() => [FilmsModel], { name: 'getCinemaAll' })
  async getAll(): Promise<FilmsModel[]> {
    return await this.service.findAll()
  }
}
