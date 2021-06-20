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

@InputType()
export class FilmsInputUpload {

    @Field(() => Int)
    @IsNotEmpty({ message: "Куда добавить?" })
    public id: number

    @Field(() => GraphQLUpload)
    @IsNotEmpty({ message: "Файл не выбран!" })
    public file: FileUpload

    @Field(() => String)
    @IsNotEmpty({ message: "Укажите поле!" })
    public field: string
}