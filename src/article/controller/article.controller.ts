import { Body, Controller, Get, Post, Put, Delete, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { ArticleDto } from 'src/article/dto/article.dto';


@Controller('article')
export class ArticleController {

    constructor(private articleService: ArticleService) {};

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    get(@Param() params) {
        return this.articleService.getArticle(params.id);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getAllArticles() {
        return this.articleService.getArticles();
    }

    @Post('post')
    create(@Body() article: ArticleDto){
        return this.articleService.createArticle(article);
    }

    @Put()
    update(@Body() article: ArticleDto) {
        return this.articleService.updateArticle(article);
    }

    @Delete(':id')
    deleteArticle(@Param() params) {
        return this.articleService.deleteArticle(params.id);
    }
}
