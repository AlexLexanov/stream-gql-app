import { ObjectType, Field } from "@nestjs/graphql"
import { genreEnum } from "./cinema.enum"

@ObjectType()
export class CinemaModel {

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