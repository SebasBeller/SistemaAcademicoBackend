import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'http://44.226.145.213',
    'http://54.187.200.255',
    'http://34.213.214.55',
    'http://35.164.95.156',
    'http://44.230.95.183',
    'http://44.229.200.200',
    'https://academicofront.onrender.com/',
    'http://localhost:4200' // Puedes dejar esto para pruebas locales
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('No permitido por CORS'));
      }
    },
    methods: 'GET,POST,PUT,DELETE,PATCH', // Métodos HTTP permitidos
    credentials: true // Si necesitas cookies o cabeceras autorizadas
  });

  await app.listen(3000);
}
bootstrap();
