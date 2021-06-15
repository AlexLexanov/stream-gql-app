import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CinemaDataEntity {
    
    @PrimaryGeneratedColumn()
    id: number

    
}