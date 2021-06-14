import { ObjectType, Field } from "@nestjs/graphql"
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { SerialModel } from "./serial.model"

@ObjectType()
@Entity({ name: 'seasons' })
export class SeasonsModel {

    @Field()
    @PrimaryGeneratedColumn()
    public id: number

    @Field()
    @Column()
    public type: string

    @Field()
    @ManyToOne(() => SerialModel, s => s.seasons)
    public season: number
}