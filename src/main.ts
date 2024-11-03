import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',  // Origen permitido (tu app Angular)
    methods: 'GET,POST,PUT,DELETE,PATCH',   // Métodos permitidos
    credentials: true                 // Si necesitas enviar cookies o cabeceras autorizadas
  });

  await app.listen(3000);
}
bootstrap();
