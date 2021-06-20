import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { genreEnum } from "./genres.enum";

@Entity()
export abstract class FilmEntity {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public discription: string

    @Column({ default: 'cinema' })
    public type: string

    @Column({ type: "enum", array: true, enum: genreEnum, default: [] })
    public genres: genreEnum[]

    @Column({ type: "text", default: '' })
    public miniPoster: string

    @Column({ type: "text", default: '' })
    public promoPoster: string

    @Column({ type: "text", default: '' })
    public promoVideo: string

    @Column({ type: "text" })
    public country: string
    
}