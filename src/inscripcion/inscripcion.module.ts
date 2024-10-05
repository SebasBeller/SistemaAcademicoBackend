import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscripcion } from './entities/inscripcion.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Inscripcion])],
  controllers: [InscripcionController],
  providers: [InscripcionService],
})
export class InscripcionModule {}
