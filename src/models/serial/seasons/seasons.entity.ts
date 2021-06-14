import { ObjectType, Field } from "@nestjs/graphql"
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { SerialEntity } from "../serial.entity"

@ObjectType()
@Entity({ name: 'seasons' })
export class SeasonsEntity {

    @Field()
    @PrimaryGeneratedColumn()
    public id: number

    @Field()
    @Column()
    public type: string

    @Field()
    @ManyToOne(() => SerialEntity, s => s.seasons)
    public season: number
}