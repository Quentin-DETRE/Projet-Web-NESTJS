import { FavoriteDto } from '../favorite.dto/favorite.dto';
import { FavoriteService } from '../service/favorite.service';
import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';


@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService: FavoriteService) {};

    @Get()
    getFavorite() {
        return this.favoriteService.getFavorite();
    }

    @Get('user')
    getAllFavoriteFromUser(@Param() params) {
        return this.favoriteService.getAllFavoriteFromUser(params.user);
    }

    @Post('post')
    createFavorite(@Body() user: FavoriteDto){
        return this.favoriteService.createFavorite(user);
    }

    @Put()
    updateFavorite(@Body() user: FavoriteDto) {
        return this.favoriteService.updateFavorite(user);
    }

    @Delete(':id')
    deleteFavorite(@Param() params) {
        return this.favoriteService.deleteFavorite(params.id);
    }
}
