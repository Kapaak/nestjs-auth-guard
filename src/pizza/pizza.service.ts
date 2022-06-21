import { Injectable } from '@nestjs/common';
import { PizzaDto } from './dto/pizza.dto';

@Injectable()
export class PizzaService {
  private readonly pizzas: Array<PizzaDto> = [
    {
      id: 1,
      name: 'Paola',
    },
    {
      id: 2,
      name: 'Quatro Barunka',
    },
  ];

  async getAll(): Promise<Array<PizzaDto> | undefined> {
    return this.pizzas;
  }

  async getById(id: number): Promise<PizzaDto> {
    const pizza = this.pizzas.filter((p) => p.id === id)[0]; //vyhodi prvni ocurence te pizzy

    return pizza;
  }

  async post(pizza: PizzaDto) {
    this.pizzas.push(pizza);

    return;
  }
}
