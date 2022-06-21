import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle("Pizza Api with authentication")
  .setDescription("This api provides routes to CRUD pizza and create users, that will need to authenticate to the application for further actions.")
  .setVersion("1.0")
  .addTag("pizza")
  .addTag("user")
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("api",app,document)
  
  await app.listen(3000);
}
bootstrap();
