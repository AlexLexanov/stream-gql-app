import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { FilmsInputCreate } from 'src/models/films/films.input';
import { FilmsModel } from 'src/models/films/films.model';
import { SerialService } from 'src/services/serial.service';

@Resolver(() => FilmsModel)
export class SerialResolver {
  constructor(private readonly service: SerialService) {}

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

  @Query(() => FilmsModel, { name: 'getSerialById' })
  async getOne(@Args('id') id: number): Promise<FilmsModel> {
    return await this.service.findOne(id)
  }

  @Query(() => [FilmsModel], { name: 'getSerialAll' })
  async getAll(): Promise<FilmsModel[]> {
    return await this.service.findAll()
  }
}
