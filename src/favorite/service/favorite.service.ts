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
        console.log(user);
        const thisUser = this.favoriteRepository
        .createQueryBuilder()
        .where("FavoriteDto.user = :id", {id: user})
        console.log(thisUser.getParameters());
        const result = await thisUser.execute();
        console.log(result)
        return result;
        // const getUser = await this.favoriteRepository.findOne({ select: ["user"]});
        // return await this.favoriteRepository.find({
        //     relations: ["articles"],
        //     where: [getUser == thisUser]
        // });
    }

    async updateFavorite(favorite : FavoriteDto) {
        this.favoriteRepository.save(favorite);
    }

    async deleteFavorite(favorite: FavoriteDto) {
        this.favoriteRepository.delete(favorite);
    }
}

