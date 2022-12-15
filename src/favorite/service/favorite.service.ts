import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { UserDto } from 'src/user/dto/user.dto';
import { Repository, QueryBuilder, DataSource } from 'typeorm';
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
    async getAllFavoriteFromUser(user: number):Promise<FavoriteDto[]> {
        const thisUser = this.favoriteRepository
        .createQueryBuilder()
        .where("FavoriteDto.user = :id", {id: user})
        const result = await thisUser.execute();
        return result;
    }

    async updateFavorite(favorite : FavoriteDto) {
        this.favoriteRepository.save(favorite);
    }

    async deleteFavorite(favorite: FavoriteDto) {
        this.favoriteRepository.delete(favorite);
    }
}

