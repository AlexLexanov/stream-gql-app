import { ArgsType, Field, Int } from "@nestjs/graphql"
import { Min, Max } from "class-validator"

@ArgsType()
export class SectionArgsPage {

    @Field(() => Int)
    @Min(1, { message: 'Минимальное значение 1' })
    page = 1

    @Field(() => Int)
    @Min(3, { message: 'Минимальное значение 3' })
    @Max(50, { message: 'Максимальное значение 50' })
    size = 10
}
