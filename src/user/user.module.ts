import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Module({
  imports: [TypeOrmModule.forFeature([UserDto])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
