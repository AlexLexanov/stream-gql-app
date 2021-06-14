import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CinemaInputCreate } from 'src/models/cinema/cinema.input';
import { CinemaModel } from 'src/models/cinema/cinema.model';
import { CinemaService } from 'src/services/cinema.service';

@Resolver(() => CinemaModel)
export class CinemaResolver {
  constructor(private readonly service: CinemaService) {}

  @Mutation(() => CinemaModel, { name: 'addCinema' })
  async create(@Args('cinema') cinema: CinemaInputCreate): Promise<CinemaModel> {
    return await this.service.create(cinema);
  }

  @Mutation(() => CinemaModel, { name: 'editingCinema' })
  async editing(@Args('id') id: number, @Args('cinema') cinema: CinemaInputCreate): Promise<CinemaModel> {
    return await this.service.editing(id, cinema);
  }

  @Mutation(() => CinemaModel, { name: 'removeCinema' })
  async remove(@Args('id') id: number): Promise<CinemaModel> {
    return await this.service.remove(id);
  }

  @Query(() => CinemaModel, { name: 'getCinemaById' })
  async getOne(@Args('id') id: number): Promise<CinemaModel> {
    return await this.service.findOne(id)
  }

  @Query(() => [CinemaModel], { name: 'getCinemaAll' })
  async getAll(): Promise<CinemaModel[]> {
    return await this.service.findAll()
  }
}
