import { Injectable} from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Repository } from 'typeorm';
import{Estudiante} from './entities/estudiante.entity'
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class EstudianteService {
  constructor(@InjectRepository(Estudiante) private readonly usuarioRepository: Repository<Estudiante>){

  }
  create(createEstudianteDto: CreateEstudianteDto) {
    console.log(createEstudianteDto)
    return this.usuarioRepository.save(createEstudianteDto);
  }

  findAll() {
    return this.usuarioRepository.find({
      relations: ['paralelo','asistencias','asistencias.materiaAsignada']
    });
  }

  
  findOneByEmail(email: string) {
    return this.usuarioRepository.findOne({ where: { email } });
  }
  
  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id_estudiante: id },  
      relations: ['paralelo', 'asistencias', 'asistencias.materiaAsignada']
    });
  }

 update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
  return this.usuarioRepository.preload({
    id_estudiante: id, 
    ...updateEstudianteDto,
  }).then((estudiante) => {
    if (!estudiante) {
      throw new Error(`Estudiante con ID ${id} no encontrado`);
    }
    return this.usuarioRepository.save(estudiante);
  });
}

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}

