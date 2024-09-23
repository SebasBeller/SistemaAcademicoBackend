import { Module } from '@nestjs/common';
import { ParaleloService } from './paralelo.service';
import { ParaleloController } from './paralelo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Paralelo} from "./entities/paralelo.entity";
@Module({
  imports: [TypeOrmModule.forFeature([
    Paralelo
  ])],
  controllers: [ParaleloController],
  providers: [ParaleloService],
  exports:[ParaleloService]
})
export class ParaleloModule {}
