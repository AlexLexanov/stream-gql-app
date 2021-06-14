import { InputType, Field, Int, ArgsType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { genreEnum } from "./cinema.enum";

type File = {
    filename: String
    mimetype: String
    encoding: String
  }

@InputType()
export class CinemaInputCreate {

    @Field(() => String)
    @IsNotEmpty({ message: "Не указано название" })
    public name: string

    @Field(() => String)
    public discription: string

    @Field(() => [String])
    @IsNotEmpty({ message: "Не указан жанр" })
    public genres: string[]

    @Field(() => Number, { description: 'Year of issue' })
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

@InputType()
export class CinemaInputRemove {

    @Field(() => Int)
    @IsNotEmpty({ message: "Какой удалить фильм?" })
    public id: number

}
