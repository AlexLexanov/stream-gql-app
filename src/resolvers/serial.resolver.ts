import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SerialInputCreate } from 'src/models/serial/serial.input';
import { SerialModel } from 'src/models/serial/serial.model';
import { SerialService } from 'src/services/serial.service';

@Resolver(() => SerialModel)
export class SerialResolver {
  constructor(private readonly service: SerialService) {}

  @Mutation(() => SerialModel, { name: 'addSerial' })
  async create(@Args('serial') serial: SerialInputCreate): Promise<SerialModel> {
    return await this.service.create(serial);
  }

  @Mutation(() => SerialModel, { name: 'editingSerial' })
  async editing(@Args('id') id: number, @Args('serial') serial: SerialInputCreate): Promise<SerialModel> {
    return await this.service.editing(id, serial);
  }

  @Mutation(() => SerialModel, { name: 'removeSerial' })
  async remove(@Args('id') id: number): Promise<SerialModel> {
    return await this.service.remove(id);
  }

  @Query(() => SerialModel, { name: 'getSerialById' })
  async getOne(@Args('id') id: number): Promise<SerialModel> {
    return await this.service.findOne(id)
  }

  @Query(() => [SerialModel], { name: 'getSerialAll' })
  async getAll(): Promise<SerialModel[]> {
    return await this.service.findAll()
  }
}
