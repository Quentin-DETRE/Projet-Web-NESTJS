import { Body, Controller, Get, Post, Put, Delete, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { ArticleDto } from 'src/article/dto/article.dto';


@Controller('article')
export class ArticleController {

    constructor(private articleService: ArticleService) {};

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('articlesId/:id')
    get(@Param() params) {
        return this.articleService.getArticleById(params.id);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getAllArticles() {
        return this.articleService.getArticles();
    }
    @Get('articlesTag/:tag')
    getArticleByTag(@Param() params) {
        return this.articleService.getArticlesByTag(params.tag)
    }

    @Post('post')
    create(@Body() article: ArticleDto){
        return this.articleService.createArticle(article);
    }

    @Put()
    update(@Body() article: ArticleDto) {
        return this.articleService.updateArticle(article);
    }

    @Delete('articleDelete/:id')
    deleteArticle(@Param() params) {
        return this.articleService.deleteArticle(params.id);
    }
}
