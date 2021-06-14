import { Field, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { genreEnum } from "../cinema/cinema.enum";


@ObjectType()
export class SerialModel {

    @Field()
    public id: number

    @Field()
    public name: string

    @Field()
    public discription: string

    @Field(() => [String])
    @IsNotEmpty({ message: "Не указан жанр" })
    public genres: genreEnum[]

    @Field()
    @IsNotEmpty({ message: "Не указан год выпуска" })
    public year: number

    @Field({ nullable: true })
    public promoPoster: string

    @Field({ nullable: true })
    public promoVideo: string

    @Field({ nullable: true })
    public video: string

    @Field()
    public country: string

}