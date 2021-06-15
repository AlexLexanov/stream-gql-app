import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { genreEnum } from "./genres.enum";

@InputType()
export class FilmsInputCreate {
    
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
export class FilmsInputRemove {

    @Field(() => Int)
    @IsNotEmpty({ message: "Какой удалить фильм?" })
    public id: number

}