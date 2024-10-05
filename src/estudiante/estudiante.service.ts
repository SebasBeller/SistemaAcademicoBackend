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
    return 'This action adds a new estudiante';
  }

  findAll() {
    return this.usuarioRepository.find({
      relations: ['paralelo']
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}

