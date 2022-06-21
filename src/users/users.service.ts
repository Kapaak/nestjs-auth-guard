import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
    private readonly users:Array<User> = [
        {
            id:1,
            username:"pavel",
            password:"pass"
        },
        {
            id:2,
            username:"barca",
            password:"password"
        }
    ]

    async findOne(username:string):Promise<User|undefined>{
        return this.users.find(user => user.username === username)
    }
}
