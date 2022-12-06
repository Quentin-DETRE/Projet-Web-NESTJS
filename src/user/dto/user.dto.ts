import { ArticleDto } from 'src/article/dto/article.dto';
import { FavoriteDto} from 'src/favorite/favorite.dto/favorite.dto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    isAdmin: boolean;
 
    @Column({nullable: false}) 
    username : string;

    @Column({nullable: false}) 
    mail : string;
    
    @Column({nullable: false})
    name: string;

    @Column({nullable: false}) 
    lastName : string;

    @Column({nullable: false})
    password: string;

    @OneToMany(type => ArticleDto, article => article.user)
    articles: ArticleDto[];

    @OneToMany(type => FavoriteDto, favorite => favorite.user)
    favorite: FavoriteDto[];
}
