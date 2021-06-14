import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SeasonModel } from 'src/models/season.model';
import { SeasonService } from 'src/services/season.service';

@Resolver(() => SeasonModel)
export class SeasonResolver {
  constructor(private readonly service: SeasonService) {}

  @Mutation(() => SeasonModel, { name: 'addSeason' })
  async create(
      @Args('type') type: string,
      @Args('season') season: number
  ) {
    return await this.service.create({ type, season });
  }
}