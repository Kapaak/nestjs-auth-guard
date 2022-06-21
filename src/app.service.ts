import { Injectable } from '@nestjs/common';
import { PizzaService } from './pizza/pizza.service';

@Injectable()
export class AppService {
constructor(private pizzaService: PizzaService){}

  getHello(): string {
    return 'Hello World!';
  }


}
