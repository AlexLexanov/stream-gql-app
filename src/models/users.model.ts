import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class UsersModel {

  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Field()
  @Column('text', { nullable: true })
  lastname: string;

  @Field()
  @Column('text', { nullable: true })
  firstname: string;

  @Field()
  @Column('text', { nullable: true })
  middlename: string;

  @Field()
  @IsEmail({}, { message: "Неверный email" })
  @IsNotEmpty({ message: "email обязательное поле" })
  @Column('text', { unique: true })
  public email: string;

  @Field()
  @Column('boolean', { default: false })
  public isVerified: boolean;

  @Field()
  @Column('boolean', { default: false })
  public isPremium: boolean;

  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty({ message: "Пароль обязательное поле" })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'Пароль слишком слабый' })
  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  public created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public update: Date;

  @Field()
  token: string
}
