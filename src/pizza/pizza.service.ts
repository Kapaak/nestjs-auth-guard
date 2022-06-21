import { Injectable} from '@nestjs/common';
import { Pizza } from './dto/pizza.dto';

@Injectable()
export class PizzaService {
    private readonly pizzas:Array<Pizza> = [
        {
            id:1,
            name:"Paola",
        },
        {
            id:2,
            name:"Quatro Barunka"
        }
    ]

    async getAll():Promise<Array<Pizza>|undefined>{
        return this.pizzas
    }

    async getById(id:number):Promise<Pizza>{
        const pizza = this.pizzas.filter(p=> p.id === id)[0] //vyhodi prvni ocurence te pizzy

        return pizza
    }

    async post(pizza: Pizza){
        this.pizzas.push(pizza)
        
       return 
    }
}
