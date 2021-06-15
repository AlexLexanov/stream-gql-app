import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SectionArgsPage } from "src/models/section/section.args";
import { SectionInputCreate } from "src/models/section/section.input";
import { SectionPageModel, SectionModel } from "src/models/section/section.model";
import { SectionService } from "src/services/section.service";

@Resolver(() => SectionModel)
export class SectionResolver {
    constructor(private readonly service: SectionService) {}

    @Mutation(() => SectionModel, { name: 'createCategory'})
    async create(@Args('input') input: SectionInputCreate): Promise<SectionModel> {
        return await this.service.create(input)
    }

    @Mutation(() => SectionModel, { name: 'editingCategory' })
    async editing(@Args('id') id: number, @Args('input') input: SectionInputCreate): Promise<SectionModel> {
      return await this.service.editing(id, input);
    }

    @Mutation(() => SectionModel, { name: 'removeSection' })
    async remove(@Args('id') id: number): Promise<SectionModel> {
      return await this.service.remove(id);
    }

    @Query(() => SectionPageModel, { name: 'getSectionPages' })
    async getPages(@Args() pageParams: SectionArgsPage): Promise<SectionPageModel> {
        return await this.service.getPages(pageParams)
    }

    @Query(() => SectionModel, { name: 'getSectionById' })
    async getOne(@Args('id') id: number): Promise<SectionModel> {
      return await this.service.findOne(id)
    }

    @Query(() => [SectionModel], { name: 'getSection' })
    async getAll(): Promise<SectionModel[]> {
        return await this.service.findAll()
    }
}