import { ArticleDto } from 'src/article/dto/article.dto';
import { FavoriteDto} from 'src/favorite/favorite.dto/favorite.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    isAdmin: boolean;
 
    @Column({length: 25, nullable: false}) 
    username : string;

    @Column({length: 25, nullable: false}) 
    mail : string;
    
    @Column({length : 25, nullable: false})
    name: string;

    @Column({length: 25, nullable: false}) 
    lastName : string;

    @Column({length: 500, nullable: false})
    password: string;

    @OneToMany(type => ArticleDto, article => article.user)
    articles: ArticleDto[];

    @OneToMany(type => FavoriteDto, favorite => favorite.user)
    favorite: FavoriteDto[];
}
