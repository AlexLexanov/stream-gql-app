import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { SerialEntity } from "../serial.entity"

import { Transform } from "class-transformer"
import * as moment from 'moment';

@Entity({ name: 'seasons' })
export class SeasonsEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Transform(({ value }) => moment(value).format('DD.MM.YYYY'))
    @Column()
    public DateOfСreation: Date

    @ManyToOne(() => SerialEntity, s => s.seasons)
    public serial: number
}