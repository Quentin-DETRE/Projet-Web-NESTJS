import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleDto } from 'src/article/dto/article.dto';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';


@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleDto)
        private articleRepository: Repository<ArticleDto>,
    ) {}
    async createArticle(article: ArticleDto) {
        if(!article.user.isAdmin) {
            throw new UnauthorizedException();
        }
        this.articleRepository.save(article);
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