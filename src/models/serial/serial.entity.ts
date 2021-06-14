import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriesEntity } from "../categories/categories.entity";
import { genreEnum } from "../cinema/cinema.enum";
import { SeasonsEntity } from "./seasons/seasons.entity";

@Entity({ name: 'serial' })
export class SerialEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    public name: string

    @Column()
    public discription: string

    @Column({ type: "enum", array: true, enum: genreEnum, default: [] })
    public genres: genreEnum[]

    @Column({ type: "int" })
    public year: number

    @Column({ type: "text", default: '' })
    public promoPoster: string

    @Column({ type: "text", default: '' })
    public promoVideo: string

    @Column({ type: "text", default: '' })
    public video: string

    @Column({ type: "text" })
    public country: string

    @ManyToOne(() => CategoriesEntity, c => c.serial)
    public category: number

    @OneToMany(() => SeasonsEntity, s => s.season)
    public seasons: SeasonsEntity[]
}