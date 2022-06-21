import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
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

  //kdyz chci pro logovani pouzit array useru nadtimhle
  async findOne(username: string): Promise<UserDto | undefined> {
    return this.users.find((user) => user.username === username);
  }

  //pro usery z MongoDb
  async findOneFromDb(username: string): Promise<User> {
    const exists = await this.userModel.exists({ username });

    if (exists === null) throw new NotFoundException();

    return this.userModel.findOne({ username });
  }

  async create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    const exists = await this.userModel.exists({ username: user.username });

    if (exists)
      throw new NotAcceptableException(
        'User is with this name is already defined!',
      );

    return createdUser.save();
  }

  async getAll(): Promise<Array<User | undefined>> {
    return this.userModel.find().exec();
  }
}
