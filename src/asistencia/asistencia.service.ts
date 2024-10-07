import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Asistencia} from "./entities/asistencia.entity";
import { Repository } from 'typeorm';
import { format } from 'date-fns';
@Injectable()
export class AsistenciaService {
  constructor(@InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>){

  }
  create(createAsistenciaDto: CreateAsistenciaDto) {
    const fechaAsistencia = new Date(createAsistenciaDto.fecha_asistencia);
    return  this.asistenciaRepository.save(createAsistenciaDto);
  }

  createAsistences(createAsistenciaDto: CreateAsistenciaDto[]) {
    createAsistenciaDto.forEach((asistencia) => {
      const fechaAsistencia = new Date(asistencia.fecha_asistencia);
      const formattedDate = fechaAsistencia.toISOString().slice(0, 19).replace('T', ' ');
      asistencia.fecha_asistencia = formattedDate;
    })
    return  this.asistenciaRepository.save(createAsistenciaDto);
  }


  findAll() {
    return this.asistenciaRepository.find({
      relations: ['estudiante','materiaAsignada']

    });
  }

  findOne(id: number) {
    return `This action returns a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return `This action updates a #${id} asistencia`;
  }

  remove(id: number) {
    // return this.asistenciaRepository.remove(id)
    return `This action removes a #${id} asistencia`;
  }
}
