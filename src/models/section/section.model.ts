import { ObjectType, Field } from "@nestjs/graphql"
import { FilmsModel } from "../films/films.model"

@ObjectType()
export class SectionModel {

    @Field()
    public id: number

    @Field()
    public name: string

    @Field()
    public description: string

    @Field(() => [FilmsModel], { defaultValue: [], nullable: true })
    public films: FilmsModel[]
}

@ObjectType()
export class SectionPageModel {

    @Field()
    page: number

    @Field()
    totalPage: number

    @Field()
    size: number

    @Field(() => [SectionModel])
    items: SectionModel[]
}
