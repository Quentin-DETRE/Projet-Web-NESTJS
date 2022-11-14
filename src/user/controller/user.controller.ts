import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {};

    @Get(':id')
    get(@Param() params) {
        return this.userService.getUser(params.id);
    }

    @Get()
    getAllUsers() {
        return this.userService.getUsers();
    }

    @Post('post')
    create(@Body() user: UserDto){
        return this.userService.createUser(user);
    }

    @Put()
    update(@Body() user: UserDto) {
        return this.userService.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.userService.deleteUser(params.id);
    }
}
