import { Module } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { AsistenciaController } from './asistencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Asistencia} from "./entities/asistencia.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Asistencia])],
  controllers: [AsistenciaController],
  providers: [AsistenciaService],
  exports:[AsistenciaService]
})
export class AsistenciaModule {}
