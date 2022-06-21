import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaController } from './pizza/pizza.controller';
import { PizzaService } from './pizza/pizza.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),AuthModule, UsersModule,MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.4vofi.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority`)],
  controllers: [AppController,PizzaController],
  providers: [AppService,PizzaService],

})
export class AppModule {}
