import { type } from 'os';
import { UserDto } from 'src/user/dto/user.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Expose } from "class-transformer"


@Entity()
export class ArticleDto {
    @PrimaryGeneratedColumn()
    id: number;

    
    @ManyToOne(type => UserDto, user => user.articles) 
    @Expose()
    user : UserDto;

    @Column()
    title: string;

    @Column() 
    text : string;
}

