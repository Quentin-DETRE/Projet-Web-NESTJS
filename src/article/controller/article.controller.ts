import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { ArticleDto } from 'src/article/dto/article.dto';


@Controller('article')
export class ArticleController {

    constructor(private articleService: ArticleService) {};

    @Get(':id')
    get(@Param() params) {
        return this.articleService.getArticle(params.id);
    }

    @Get()
    getAllUsers() {
        return this.articleService.getArticles();
    }

    @Post('post')
    create(@Body() article: ArticleDto){
        return this.articleService.createArticle(article);
    }

    @Put(':isAdmin')
    update(@Body() article: ArticleDto) {
        return this.articleService.updateArticle(article);

    }

    @Delete(':id')
    deleteArticle(@Param() params) {
        return this.articleService.deleteArticle(params.id);
    }
}
