import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {  
    
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getUserByUsername(username);
        if(user && !await bcrypt.compare(pass, user.password)) {
            console.log("Faux");
            throw new UnauthorizedException();
        }
        console.log("Vrai");
        const { password, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { username: user["username"], sub: user["id"]};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}