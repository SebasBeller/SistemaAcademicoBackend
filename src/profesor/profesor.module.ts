import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Profesor} from "./entities/profesor.entity"
import {ProfesorCreate} from "./entities/profesorCreate.entity"

@Module({
  imports: [TypeOrmModule.forFeature([
    Profesor, ProfesorCreate
  ])],
  controllers: [ProfesorController],
  providers: [ProfesorService],
  exports:[ProfesorService]
})
export class ProfesorModule {}
