import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './controller/article.controller';
import { ArticleDto } from './dto/article.dto';
import { ArticleService } from './service/article.service';

@Module({
  imports:[TypeOrmModule.forFeature([ArticleDto])],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [TypeOrmModule]
})
export class ArticleModule {}


