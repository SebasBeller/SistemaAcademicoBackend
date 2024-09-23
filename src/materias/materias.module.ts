import { Module } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasController } from './materias.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Materia} from "./entities/materia.entity";
import {ParaleloModule} from "src/paralelo/paralelo.module";
@Module({
  imports: [TypeOrmModule.forFeature([Materia]),ParaleloModule],
  controllers: [MateriasController],
  providers: [MateriasService],
  exports:[MateriasService]
})
export class MateriasModule {}
