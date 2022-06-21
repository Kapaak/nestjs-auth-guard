import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaController } from './pizza/pizza.controller';
import { PizzaService } from './pizza/pizza.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController,PizzaController],
  providers: [AppService,PizzaService],
  imports: [AuthModule, UsersModule],

})
export class AppModule {}
