import { Entity, ManyToOne, OneToOne } from "typeorm";
import { SectionEntity } from "../../section/section.entity";
import { FilmEntity } from "../films.entity";
import { CinemaMetaEntity } from "./meta/cinema-meta.entity";

@Entity({ name: 'cinema' })
export class CinemaEntity extends FilmEntity {

    @ManyToOne(() => SectionEntity, c => c.cinema)
    public section: number

    @OneToOne(() => CinemaMetaEntity, m => m.cinema)
    public meta: CinemaMetaEntity
}