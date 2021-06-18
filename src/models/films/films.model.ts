import { ObjectType, Field } from "@nestjs/graphql"
import { genreEnum } from "./genres.enum"

@ObjectType()
export class FilmsModel {

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

    @Field(() => String, { nullable: true })
    public miniPoster: string

    @Field(() => String, { nullable: true })
    public promoPoster: string

    @Field(() => String, { nullable: true })
    public promoVideo: string

    @Field()
    public country: string
}