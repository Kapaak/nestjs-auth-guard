import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('hi')
  async getHello() {
    return {
      message: 'heloooo!',
    };
  }

  @ApiBody({ type: UserDto })
  @Post()
  async createUser(@Body() user: UserDto) {
    return this.usersService.create(user);
  }
}
