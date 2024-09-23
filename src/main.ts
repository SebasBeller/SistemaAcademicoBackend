// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:4200',  // Origen permitido (tu app Angular)
    methods: 'GET,POST,PUT,DELETE',   // Métodos permitidos
    credentials: true                 // Si necesitas enviar cookies o cabeceras autorizadas
  });

  await app.listen(3000);
}
bootstrap();
