import { Module } from '@nestjs/common';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';
import { MateriaAsignadaProfesorController } from './materia-asignada-profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriasModule } from 'src/materias/materias.module';
import {MateriaAsignadaProfesor} from "./entities/materia-asignada-profesor.entity"
import {InscripcionModule} from "../inscripcion/inscripcion.module"
import {AsistenciaModule} from "../asistencia/asistencia.module"
import {NotaModule} from "../nota/nota.module"


@Module({
  imports:[TypeOrmModule.forFeature([MateriaAsignadaProfesor]),
  MateriasModule,
  InscripcionModule,
  AsistenciaModule,
  NotaModule
],
  controllers: [MateriaAsignadaProfesorController],
  providers: [MateriaAsignadaProfesorService],
})
export class MateriaAsignadaProfesorModule {}
