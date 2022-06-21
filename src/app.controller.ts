import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login") 
  async login(@Request() req){
    // return req.user
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req){
    return req.user
  }

}

//u toho local-strategy jsem nepotreboval import AuthService, protoze jsem jen
//resil LocalAuthGuard a vracel usera a tady budu vracet JWT
