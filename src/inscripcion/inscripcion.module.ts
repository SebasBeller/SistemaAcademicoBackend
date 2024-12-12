import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscripcion } from './entities/inscripcion.entity';
import {NotaModule} from '../nota/nota.module'
import {AsistenciaModule} from '../asistencia/asistencia.module'
@Module({
  imports:[TypeOrmModule.forFeature([Inscripcion]),NotaModule,AsistenciaModule],
  controllers: [InscripcionController],
  providers: [InscripcionService],
  exports:[InscripcionService]
})
export class InscripcionModule {}
