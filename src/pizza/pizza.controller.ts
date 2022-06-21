import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PizzaService } from './pizza.service';


@ApiTags("pizza")
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
