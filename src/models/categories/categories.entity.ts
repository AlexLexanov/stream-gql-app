import { AfterLoad, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CinemaEntity } from "../cinema/cinema.entity";
import { SerialModel } from "../serial.model";

@Entity({ name: 'categories' })
export class CategoriesEntity {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public description: string

    public data: ConcatArray<CinemaEntity | SerialModel>

    @OneToMany(() => CinemaEntity, c => c.category)
    public cinema: CinemaEntity[]

    @OneToMany(() => SerialModel, s => s.category)
    public serial: SerialModel[]

    @AfterLoad()
    public async setVal() {
      this.data = [ ...this.cinema, ...this.serial ]
    }
}