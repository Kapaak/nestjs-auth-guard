import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PizzaDto } from './dto/pizza.dto';
import { PizzaService } from './pizza.service';

@ApiTags('pizza')
@Controller('pizza')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @ApiOperation({ description: 'get all pizzas' })
  @Get()
  async getAllPizzas() {
    return this.pizzaService.getAll();
  }

  @ApiOperation({ description: 'get piza by its id' })
  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async getPizzaById(@Param('id') id) {
    return this.pizzaService.getById(+id);
  }

  @ApiOperation({ description: 'create new pizza' })
  @ApiBody({ type: PizzaDto })
  @Post()
  async postPizza(@Body() pizza: PizzaDto) {
    return this.pizzaService.post(pizza);
  }
}
