import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get("hi")
    async getHello(){
        return{
            "message":"heloooo!"
        }
    }

    @Post()
    async createUser(@Body() user){
        return this.usersService.create(user)
    }
}
