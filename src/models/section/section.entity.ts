import { AfterLoad, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CinemaEntity } from "../films/cinema/cinema.entity";
import { FilmsModel } from "../films/films.model";
import { SerialEntity } from "../films/serial/serial.entity";

@Entity({ name: 'section' })
export class SectionEntity {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column({ unique: true })
    public name: string

    @Column()
    public description: string

    public films: ConcatArray<FilmsModel>

    @OneToMany(() => CinemaEntity, c => c.section)
    public cinema: FilmsModel[]

    @OneToMany(() => SerialEntity, s => s.section)
    public serial: FilmsModel[]

    @AfterLoad()
    public async setVal() {
      this.films = [ ...this.cinema, ...this.serial ].sort(( a, b ) => a.id - b.id)
    }
}