import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    //local-strategy
    const user = await this.usersService.findOneFromDb(username); //kdyz zmenim na .findOne , tak to budu brat z lokalne definovanych useru

    if (user && user.password === pass) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: UserDto) {
    //jwt-strategy
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
