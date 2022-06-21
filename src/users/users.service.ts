import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private readonly users: Array<UserDto> = [
    {
      id: 1,
      username: 'pavel',
      password: 'pass',
    },
    {
      id: 2,
      username: 'barca',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<UserDto | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);

    return createdUser.save();
  }
}
