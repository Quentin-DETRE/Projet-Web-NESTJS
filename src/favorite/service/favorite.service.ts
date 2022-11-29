import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository } from 'typeorm';
import { FavoriteDto } from '../favorite.dto/favorite.dto';

@Injectable()
export class FavoriteService {
    constructor(@InjectRepository(FavoriteDto) private favoriteRepository: Repository<FavoriteDto>) {}

    async createFavorite(favorite: FavoriteDto) {
        this.favoriteRepository.save(favorite);
    }

    async getFavorite():Promise<FavoriteDto[]> {
        return this.favoriteRepository.find();
    }
    async getAllFavoriteFromUser(user: UserDto):Promise<FavoriteDto[]> {
        return await this.favoriteRepository.find({
            where: [{"user": user}]
        });
    }


    async updateFavorite(favorite : FavoriteDto) {
        this.favoriteRepository.save(favorite);
    }

    async deleteFavorite(favorite: FavoriteDto) {
        this.favoriteRepository.delete(favorite);
    }
}
