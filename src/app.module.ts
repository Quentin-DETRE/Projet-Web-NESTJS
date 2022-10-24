import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDto } from './user/dto/user.dto';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'catcatcatcat',
      entities: [UserDto],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
