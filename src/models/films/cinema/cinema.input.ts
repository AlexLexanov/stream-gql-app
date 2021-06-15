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
    public genres: genreEnum[]

    @Field({ nullable: true })
    public miniPoster: string

    @Field({ nullable: true })
    public promoPoster: string

    @Field({ nullable: true })
    public promoVideo: string

    @Field()
    public country: string

    @Field()
    public category: number
}

@InputType()
export class CinemaInputRemove {

    @Field(() => Int)
    @IsNotEmpty({ message: "Какой удалить фильм?" })
    public id: number

}
