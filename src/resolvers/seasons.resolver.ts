import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SeasonsModel } from 'src/models/seasons.model';
import { SeasonsService } from 'src/services/seasons.service';

@Resolver(() => SeasonsModel)
export class SeasonsResolver {
  constructor(private readonly service: SeasonsService) {}

  // @Mutation(() => SeasonsModel, { name: 'addSeasons' })
  // async create(
  //     @Args('type') type: string,
  //     @Args('film') film: number
  // ) {
  //   return await this.service.create({ type, film });
  // }
}
