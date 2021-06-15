import { ObjectType, Field } from "@nestjs/graphql"
import { genreEnum } from "../films/cinema/cinema.enum"

@ObjectType()
export class SectionModel {

    @Field()
    public id: number

    @Field()
    public name: string

    @Field()
    public description: string

    @Field(() => [ConcatFilmsModel], { defaultValue: [], nullable: true })
    public data: ConcatFilmsModel[]
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

@ObjectType()
export class ConcatFilmsModel {

    @Field()
    public id: number

    @Field()
    public name: string

    @Field()
    public discription: string

    @Field()
    public type: string

    @Field(() => [String])
    public genres: genreEnum[]

    @Field({ nullable: true })
    public miniPoster: string

    @Field({ nullable: true })
    public promoPoster: string

    @Field({ nullable: true })
    public promoVideo: string

    @Field()
    public country: string

}