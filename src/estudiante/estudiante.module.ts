import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Estudiante} from './entities/estudiante.entity'
import {EstudianteCreate} from './entities/estudianteCreate.entity'


@Module({
  imports:[TypeOrmModule.forFeature([EstudianteCreate,Estudiante])],
  controllers: [EstudianteController],
  providers: [EstudianteService],
  exports:[EstudianteService]
})
export class EstudianteModule {}
