import { AfterLoad, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CinemaEntity } from "../cinema/cinema.entity";
import { CinemaModel } from "../cinema/cinema.model";
import { SerialEntity } from "../serial/serial.entity";
import { SerialModel } from "../serial/serial.model";

@Entity({ name: 'categories' })
export class CategoriesEntity {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public description: string

    public data: ConcatArray<CinemaModel | SerialModel>

    @OneToMany(() => CinemaEntity, c => c.category)
    public cinema: CinemaModel[]

    @OneToMany(() => SerialEntity, s => s.category)
    public serial: SerialModel[]

    @AfterLoad()
    public async setVal() {
      this.data = [ ...this.cinema, ...this.serial ]
    }
}