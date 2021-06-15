import { Entity, ManyToOne } from "typeorm";
import { SectionEntity } from "../../section/section.entity";
import { FilmEntity } from "../films.entity";

@Entity({ name: 'cinema' })
export class CinemaEntity extends FilmEntity {

    @ManyToOne(() => SectionEntity, c => c.cinema)
    public section: number
}