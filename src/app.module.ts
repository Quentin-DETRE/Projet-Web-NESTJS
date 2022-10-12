import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [AuthorModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
