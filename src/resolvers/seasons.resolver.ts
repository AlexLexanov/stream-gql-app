import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SeasonsEntity } from 'src/models/serial/seasons/seasons.entity';
import { SeasonsService } from 'src/services/seasons.service';

@Resolver(() => SeasonsEntity)
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
