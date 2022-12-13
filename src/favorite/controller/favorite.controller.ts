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

    @Get('favorite/:user')
    getAllFavoriteFromUser(@Param() params) {
        return this.favoriteService.getAllFavoriteFromUser(params.user);
    }

    @Post('post')
    createFavorite(@Body() favorite: FavoriteDto){
        return this.favoriteService.createFavorite(favorite);
    }

    @Put()
    updateFavorite(@Body() favorite: FavoriteDto) {
        return this.favoriteService.updateFavorite(favorite);
    }

    @Delete('favoriteDelete/:id')
    deleteFavorite(@Param() params) {
        return this.favoriteService.deleteFavorite(params.id);
    }
}
