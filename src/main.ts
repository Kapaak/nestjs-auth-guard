import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //setup swagger
  const config = new DocumentBuilder()
    .addBearerAuth() // can be deleted if auth token in /api doesnt work
    .setTitle('Pizza Api with authentication')
    .setDescription(
      'This api provides routes to CRUD pizza and create users, that will need to authenticate to the application for further actions.',
    )
    .setVersion('1.0')
    .addTag('pizza')
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //setup validation for DTOs and other using class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //to remove all additional data, that are passed and not expected
    }),
  );

  await app.listen(3000);
}
bootstrap();
