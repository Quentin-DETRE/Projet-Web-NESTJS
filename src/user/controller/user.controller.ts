import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {};

    // @Post('/')
    // create(@Body() user: UserDto): UserDto {
    //     return this.create(userService);
    // }

    @Get('/')
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }
}
