import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { GraphQLUpload } from "graphql-tools";
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

    @Field(() => GraphQLUpload, { nullable: true })
    public miniPoster: string

    @Field(() => GraphQLUpload, { nullable: true })
    public promoPoster: string

    @Field(() => GraphQLUpload, { nullable: true })
    public promoVideo: string

    @Field()
    public country: string

    @Field()
    public section: number
}

@InputType()
export class FilmsInputRemove {

    @Field(() => Int)
    @IsNotEmpty({ message: "Какой удалить фильм?" })
    public id: number

}