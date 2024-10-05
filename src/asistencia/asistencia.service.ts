import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Asistencia} from "./entities/asistencia.entity";
import { Repository } from 'typeorm';
@Injectable()
export class AsistenciaService {
  constructor(@InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>){

  }
  create(createAsistenciaDto: CreateAsistenciaDto) {
    return 'This action adds a new asistencia';
  }

  findAll() {
    return this.asistenciaRepository.find({
      relations: ['estudiante','materiaAsignada']

    });
    // return `This action returns all asistencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return `This action updates a #${id} asistencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistencia`;
  }
}
