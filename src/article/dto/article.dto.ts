import { type } from 'os';
import { FavoriteDto } from 'src/favorite/favorite.dto/favorite.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';


@Entity()
export class ArticleDto {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UserDto, user => user.articles) 
    user : UserDto;

    @Column({nullable: false} )
    title: string;

    @Column({length: 10000,nullable: false}) 
    text : string;

    @Column({nullable: false})
    tag: string;

    @OneToMany(type => FavoriteDto, favorite => favorite.article)
    favorite: FavoriteDto;
}

