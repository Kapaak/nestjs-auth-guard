import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PizzaDto } from './dto/pizza.dto';
import { PizzaService } from './pizza.service';

@ApiTags('pizza')
@Controller('pizza')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Get()
  async getAllPizzas() {
    return this.pizzaService.getAll();
  }

  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async getPizzaById(@Param('id') id) {
    return this.pizzaService.getById(+id);
  }

  @ApiBody({ type: PizzaDto })
  @Post()
  async postPizza(@Body() pizza: PizzaDto) {
    return this.pizzaService.post(pizza);
  }
}
