import { Transform } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import moment from "moment";

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
    
    @Column({ default: 0 })
    public seasonsCount: number
}