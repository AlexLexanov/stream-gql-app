import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { qualityEnum } from "../../quality.enum";
import { CinemaEntity } from "../cinema.entity";

@Entity()
export class CinemaMetaEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    public video: string

    @Column({ type: "enum", array: true, enum: qualityEnum, default: [] })
    public quality: string[]
    
    @OneToOne(() => CinemaEntity,c => c.meta)
    cinema: number
}