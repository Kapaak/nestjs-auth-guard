import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ description: 'get all users' })
  @Get()
  async getAllUsers() {
    return this.usersService.getAll();
  }

  @ApiOperation({ description: 'get user by his name' })
  @ApiParam({ name: 'name', type: 'string' })
  @Get(':name')
  async getUserByName(@Param('name') name) {
    return this.usersService.findOneFromDb(name);
  }

  @ApiOperation({ description: 'create a new user account' })
  @ApiBody({ type: UserDto })
  @Post()
  async createUser(@Body() user: UserDto) {
    return this.usersService.create(user);
  }
}
