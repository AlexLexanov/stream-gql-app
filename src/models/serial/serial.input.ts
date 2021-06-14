import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { genreEnum } from "../cinema/cinema.enum";

@InputType()
export class SerialInputCreate {
    
    @Field(() => String)
    @IsNotEmpty({ message: "Не указано название" })
    public name: string

    @Field(() => String)
    public discription: string

    @Field(() => [String])
    @IsNotEmpty({ message: "Не указан жанр" })
    public genres: genreEnum[]

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

    @Field()
    public category: number
}

@InputType()
export class SerialInputRemove {

    @Field(() => Int)
    @IsNotEmpty({ message: "Какой удалить фильм?" })
    public id: number

}