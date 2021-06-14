import { ObjectType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"
import { CinemaEntity } from "../cinema/cinema.entity"
import { SerialModel } from "../serial.model"

@ObjectType()
export class CategoriesModel {

    @Field()
    public id: number

    @Field()
    @IsNotEmpty({ message: "Не указано название категории" })
    public name: string

    @Field()
    public description: string

    @Field(() => [SerialModel || CinemaEntity], { defaultValue: [], nullable: true })
    public data: ConcatArray<CinemaEntity | SerialModel>
}

@ObjectType()
export class CategoriesPageModel {

    @Field()
    page: number

    @Field()
    totalPage: number

    @Field()
    size: number

    @Field(() => [CategoriesModel])
    items: CategoriesModel[]
}