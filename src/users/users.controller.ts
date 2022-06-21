import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags("user")
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
