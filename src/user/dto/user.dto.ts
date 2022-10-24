import { IsNumber, IsString } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isAdmin: boolean;

    @Column()
    name: string;

    @Column() 
    lastName : string;

    @Column()
    Password: string;
}
