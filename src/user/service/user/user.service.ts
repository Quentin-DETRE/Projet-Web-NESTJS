import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(UserDto) private userRepository: Repository<UserDto>) {}

    async createUser(user: UserDto) {
        this.userRepository.save(user);
    }
    async getUsers():Promise<UserDto[]> {
        return this.userRepository.find();
    }

    async getUser(_id: number):Promise<UserDto[]> {
        return await this.userRepository.find({
            where: [{"id": _id}]
        });
    }

    // async findOne(username: string): Promise<UserDto[]> {
    //     return await this.userRepository.find({
    //         select: ["password"],
    //         where: [{"username": username}],
            
    //     });
    // }

    async updateUser(user : UserDto) {
        this.userRepository.save(user);
    }

    async deleteUser(user: UserDto) {
        this.userRepository.delete(user);
    }
}
