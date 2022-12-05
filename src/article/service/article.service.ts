import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from 'src/article/dto/article.dto';


@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleDto)
        private articleRepository: Repository<ArticleDto>,
    ) {}
    async createArticle(article: ArticleDto) {
        if(article.user.isAdmin == true) {
            this.articleRepository.save(article);
        }
        else {
            return null;
        }
    }

    async getArticles():Promise<ArticleDto[]> {
        return this.articleRepository.find({
            relations:["user"]
        });
    }
    async getArticleById(_id: number):Promise<ArticleDto> {
        return await this.articleRepository.findOne({
            where: [{"id": _id}],
            relations:["user"]
        });
    }
    async getArticlesByTag(_tag: string): Promise<ArticleDto[]> {
        return await this.articleRepository.find({
            where:[{"tag":_tag}]
        })
    }

    async updateArticle(user : ArticleDto) {
        this.articleRepository.save(user);
    }
    async deleteArticle(user: ArticleDto) {
        this.articleRepository.delete(user);
    }
}