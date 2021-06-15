import { Entity, ManyToOne, OneToMany } from "typeorm";
import { SectionEntity } from "../../section/section.entity";
import { FilmEntity } from "../films.entity";
import { SeasonsEntity } from "./seasons/seasons.entity";

@Entity({ name: 'serial' })
export class SerialEntity extends FilmEntity {
    
    @ManyToOne(() => SectionEntity, c => c.serial)
    public section: number

    @OneToMany(() => SeasonsEntity, s => s.serial)
    public seasons: SeasonsEntity[]
}