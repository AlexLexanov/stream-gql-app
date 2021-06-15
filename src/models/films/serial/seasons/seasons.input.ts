import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SeasonsInputCreate {

    @Field(() => Date)
    public DateOfСreation: Date 
}