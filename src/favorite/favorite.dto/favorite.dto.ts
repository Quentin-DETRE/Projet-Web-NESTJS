import { type } from 'os';
import { ArticleDto } from 'src/article/dto/article.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne } from 'typeorm';


@Entity()
export class FavoriteDto {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ArticleDto, article => article.favorite)
    article: ArticleDto;

    @ManyToOne(type => UserDto, user => user.favorite)
    user: UserDto;
}
