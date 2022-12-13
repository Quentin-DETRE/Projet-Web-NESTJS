import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {};

    @Get('userId/:id')
    get(@Param() params) {
        return this.userService.getUserById(params.id);
    }

    @Get('userUsername/:username')
    getWithUsername(@Param() params) {
        return this.userService.getUserByUsernameForSearch(params.username);
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

    @Delete('userDelete/:id')
    deleteUser(@Param() params) {
        return this.userService.deleteUser(params.id);
    }
}
