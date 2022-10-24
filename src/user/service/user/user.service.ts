import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserDto)
        private userRepository: Repository<UserDto>,
    ) {}

    findAll(): Promise<UserDto[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<UserDto> {
        return this.userRepository.findOneBy({id});
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
