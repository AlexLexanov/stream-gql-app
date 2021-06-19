import { Field, InputType, Int } from "@nestjs/graphql";
import { GraphQLUpload, FileUpload } from "graphql-upload";
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

    @Field(() => GraphQLUpload, { nullable: true })
    public miniPoster: FileUpload

    @Field(() => GraphQLUpload, { nullable: true })
    public promoPoster: FileUpload

    @Field(() => GraphQLUpload, { nullable: true })
    public promoVideo: FileUpload

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