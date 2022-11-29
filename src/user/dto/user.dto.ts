import { ArticleDto } from 'src/article/dto/article.dto';
import { FavoriteDto} from 'src/favorite/favorite.dto/favorite.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    isAdmin: boolean;
 
    @Column({length: 25}) 
    username : string;

    @Column({length: 25}) 
    mail : string;
    
    @Column({length : 25})
    name: string;

    @Column({length: 25}) 
    lastName : string;

    @Column({length: 50})
    password: string;

    @OneToMany(type => ArticleDto, article => article.user)
    articles: ArticleDto[];

    @OneToMany(type => FavoriteDto, favorite => favorite.user)
    favorite: FavoriteDto[];
}
