import { InputType, Field, ArgsType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CategoryInputCreate {

    @Field()
    @IsNotEmpty({ message: "Не указано название категории" })
    public name: string

    @Field()
    public description: string
    
}