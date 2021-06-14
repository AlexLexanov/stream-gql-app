import { ObjectType, Field } from "@nestjs/graphql"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@ObjectType()
@Entity({ name: 'season' })
export class SeasonModel {

    @Field()
    @PrimaryGeneratedColumn()
    public id: number

    @Field()
    @Column()
    public type: string

    @Field()
    @Column()
    public season: number
}