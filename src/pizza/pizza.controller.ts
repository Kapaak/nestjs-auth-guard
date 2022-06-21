import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
    constructor(private pizzaService: PizzaService){}


    @Get()
    async getAllPizzas(){
        return this.pizzaService.getAll()
    }

    @Get(":id")
    async getPizzaById(@Param() {id}){
        return this.pizzaService.getById(+id)
    }

    @Post()
    async postPizza(@Body() pizza){
        return this.pizzaService.post(pizza)
    }
}
