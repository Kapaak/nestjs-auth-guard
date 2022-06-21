import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserDto } from './users/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    description:
      'login with real username and password to generate access-token (expires after a while)',
  })
  @ApiBody({ type: UserDto })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // return req.user
    return this.authService.login(req.user);
  }

  @ApiOperation({
    description:
      'insert generated access-token into the lock icon -> top right corner',
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Request() req) {
    return req.user;
  }
}

//u toho local-strategy jsem nepotreboval import AuthService, protoze jsem jen
//resil LocalAuthGuard a vracel usera a tady budu vracet JWT
