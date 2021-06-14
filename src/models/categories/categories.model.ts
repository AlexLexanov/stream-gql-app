import { ObjectType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"
import { CinemaEntity } from "../cinema/cinema.entity"
import { CinemaModel } from "../cinema/cinema.model"
import { SerialEntity } from "../serial/serial.entity"
import { SerialModel } from "../serial/serial.model"

@ObjectType()
export class CategoriesModel {

    @Field()
    public id: number

    @Field()
    @IsNotEmpty({ message: "Не указано название категории" })
    public name: string

    @Field()
    public description: string

    @Field(() => [SerialModel || CinemaModel], { defaultValue: [], nullable: true })
    public data: ConcatArray<CinemaModel | SerialModel>
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