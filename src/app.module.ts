import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './user/dto/user.dto';
import { ArticleDto } from './article/dto/article.dto';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'catcatcatcat',
      entities: [UserDto, ArticleDto],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArticleModule,
    AuthModule,
    FavoriteModule,
  ],
})
export class AppModule {}
