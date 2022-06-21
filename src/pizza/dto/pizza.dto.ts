import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PizzaDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}
