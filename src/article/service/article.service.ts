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


    async createArticle(user: ArticleDto) {
        this.articleRepository.save(user);
    }
    async getArticles():Promise<ArticleDto[]> {
        return this.articleRepository.find();
    }

    async getArticle(_id: number):Promise<ArticleDto[]> {
        return await this.articleRepository.find({
            select:["user", "title", "text"],
            where: [{"id": _id}]
        });
    }

    async updateArticle(user : ArticleDto) {
        this.articleRepository.save(user);
    }

    async deleteArticle(user: ArticleDto) {
        this.articleRepository.delete(user);
    }
}