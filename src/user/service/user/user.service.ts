import { Injectable, UnauthorizedException , HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
    constructor(@InjectRepository(UserDto) private userRepository: Repository<UserDto>) {}

    async createUser(user: UserDto) {
        if (await this.userRepository.findOne({ where: [{"username": user.username}]})) {
            throw new HttpException('Username already exist', HttpStatus.BAD_REQUEST);
        }

        if (await this.userRepository.findOne({ where: [{"mail": user.mail}]})) {
            throw new HttpException('Email already exist', HttpStatus.BAD_REQUEST);
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        this.userRepository.save(user);
    } 

    async getUsers():Promise<UserDto[]> {
        return this.userRepository.find();
    }
    async getUserById(_id: number):Promise<UserDto> {
        return await this.userRepository.findOne({
            where: [{"id": _id}]
        });
    }
    async getUserByUsername(username: string): Promise<UserDto> {
        return await this.userRepository.findOne({
            where: [{"username": username}]
        });
    }

    async getUserByUsernameForSearch(username: string): Promise<UserDto> {
        return await this.userRepository.findOne({
            select: ["id", "isAdmin", "lastName", "mail", "name", "username","articles", "favorite"],
            where: [{"username": username}]
        });
    }

    async updateUser(user : UserDto) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        this.userRepository.save(user);
    }
    async deleteUser(user: UserDto) {
        this.userRepository.delete(user);
    }
}
