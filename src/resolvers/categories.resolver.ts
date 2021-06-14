import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryArgsPage } from "src/models/categories/categories.args";
import { CategoryInputCreate } from "src/models/categories/categories.input";
import { CategoriesPageModel, CategoriesModel } from "src/models/categories/categories.model";
import { CategoriesService } from "src/services/categories.service";

@Resolver(() => CategoriesModel)
export class CategoriesResolver {
    constructor(private readonly service: CategoriesService) {}

    @Mutation(() => CategoriesModel, { name: 'createCategory'})
    async create(@Args('category') category: CategoryInputCreate): Promise<CategoriesModel> {
        return await this.service.create(category)
    }

    @Mutation(() => CategoriesModel, { name: 'editingCategory' })
    async editing(@Args('id') id: number, @Args('category') category: CategoryInputCreate): Promise<CategoriesModel> {
      return await this.service.editing(id, category);
    }

    @Mutation(() => CategoriesModel, { name: 'removeCategory' })
    async remove(@Args('id') id: number): Promise<CategoriesModel> {
      return await this.service.remove(id);
    }

    @Query(() => CategoriesPageModel, { name: 'getCategoryPages' })
    async getPages(@Args() pageParams: CategoryArgsPage): Promise<CategoriesPageModel> {
        return await this.service.getPages(pageParams)
    }

    @Query(() => CategoriesModel, { name: 'getCategoryById' })
    async getOne(@Args('id') id: number): Promise<CategoriesModel> {
      return await this.service.findOne(id)
    }

    @Query(() => [CategoriesModel], { name: 'getCategories' })
    async getAll(): Promise<CategoriesModel[]> {
        return await this.service.findAll()
    }
}