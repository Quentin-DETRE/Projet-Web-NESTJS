import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteService } from './service/favorite.service';
import { FavoriteController } from './controller/favorite.controller';
import { FavoriteDto } from './favorite.dto/favorite.dto';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteDto])],
  providers: [FavoriteService],
  controllers: [FavoriteController],
  exports: [TypeOrmModule]
})
export class FavoriteModule {}
