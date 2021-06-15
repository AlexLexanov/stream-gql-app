import { AfterLoad, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CinemaEntity } from "../films/cinema/cinema.entity";
import { FilmsModel } from "../films/films.model";
import { SerialEntity } from "../films/serial/serial.entity";

@Entity({ name: 'section' })
export class SectionEntity {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public description: string

    public data: ConcatArray<FilmsModel>

    @OneToMany(() => CinemaEntity, c => c.section)
    public cinema: FilmsModel[]

    @OneToMany(() => SerialEntity, s => s.section)
    public serial: FilmsModel[]

    @AfterLoad()
    public async setVal() {
      this.data = [ ...this.cinema, ...this.serial ].sort(( a, b ) => a.id - b.id)
    }
}