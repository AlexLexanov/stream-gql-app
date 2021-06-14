import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SeasonEntity } from 'src/models/serial/seasons/season/season.entity';
import { SeasonService } from 'src/services/season.service';

@Resolver(() => SeasonEntity)
export class SeasonResolver {
  constructor(private readonly service: SeasonService) {}

  @Mutation(() => SeasonEntity, { name: 'addSeason' })
  async create(
      @Args('type') type: string,
      @Args('season') season: number
  ) {
    return await this.service.create({ type, season });
  }
}