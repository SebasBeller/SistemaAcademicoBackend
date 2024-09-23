import { Module } from '@nestjs/common';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';
import { MateriaAsignadaProfesorController } from './materia-asignada-profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriasModule } from 'src/materias/materias.module';
import {MateriaAsignadaProfesor} from "./entities/materia-asignada-profesor.entity"
@Module({
  imports:[TypeOrmModule.forFeature([MateriaAsignadaProfesor]),MateriasModule],
  controllers: [MateriaAsignadaProfesorController],
  providers: [MateriaAsignadaProfesorService],
})
export class MateriaAsignadaProfesorModule {}
