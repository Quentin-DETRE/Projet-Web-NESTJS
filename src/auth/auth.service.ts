import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {  
    
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUserByUsername(username);
        const goodPass = await bcrypt.compare(pass, user.password);
        if (user && goodPass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user["username"], sub: user["id"]};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}