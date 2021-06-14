import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriesEntity } from "./categories/categories.entity";
import { SeasonsModel } from "./seasons.model";


@ObjectType()
@Entity({ name: 'serial' })
export class SerialModel {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    public title: string

    @Field()
    @Column()
    public description: string

    @Field()
    @Column()
    public meta: string

    @ManyToOne(() => CategoriesEntity, c => c.serial)
    public category: number

    @OneToMany(() => SeasonsModel, s => s.season)
    public seasons: SeasonsModel[]
}