import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriesEntity } from "../categories/categories.entity";
import { genreEnum } from "./cinema.enum";

@Entity({ name: 'cinema' })
export class CinemaEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public discription: string

    @Column({ type: "simple-array", array: true, enum: [genreEnum], default: [] })
    public genres: genreEnum

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

    @ManyToOne(() => CategoriesEntity, c => c.cinema)
    public category: number
}