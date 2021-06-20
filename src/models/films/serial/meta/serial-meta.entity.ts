import { Transform } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import moment from "moment";
import { SeasonsEntity } from "../seasons/seasons.entity";

@Entity()
export class SerialDataEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Transform(({ value }) => moment(value).format('YYYY'))
    @Column()
    public fromYear: Date

    @Transform(({ value }) => moment(value).format('YYYY'))
    @Column({ nullable: true })
    public toYear: Date

    @Column()
    public details: string


    @OneToMany(() => SeasonsEntity, s => s.serial)
    public seasons: SeasonsEntity[]
    
    @Column({ default: 0 })
    public seasonsCount: number
}