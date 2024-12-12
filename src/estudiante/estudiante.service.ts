import { Injectable} from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Repository } from 'typeorm';
import{Estudiante} from './entities/estudiante.entity'
import{EstudianteCreate} from './entities/estudianteCreate.entity'

import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class EstudianteService {
  constructor(@InjectRepository(Estudiante) private readonly usuarioRepository: Repository<Estudiante>,
  @InjectRepository(EstudianteCreate) private readonly usuarioRepositoryCreate: Repository<EstudianteCreate>,
){

  }
  create(createEstudianteDto: CreateEstudianteDto) {
    return this.usuarioRepositoryCreate.save(createEstudianteDto);
  }

  findAll() {
    return this.usuarioRepository.find({
      relations: ['paralelo','asistencias','asistencias.materiaAsignada']
    });
  }

  
  findOneByEmail(email: string) {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  findOneByEmailWithPass(email: string) {
    return this.usuarioRepositoryCreate.findOne({ where: { email} });
  }
  
  
  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id_estudiante: id },  
      relations: ['paralelo', 'asistencias', 'asistencias.materiaAsignada']
    });
  }

 update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
  // console.log()
  return this.usuarioRepositoryCreate.update(id,updateEstudianteDto);
}

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}

