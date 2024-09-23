import { Injectable } from '@nestjs/common';
import { CreateMateriaAsignadaProfesorDto } from './dto/create-materia-asignada-profesor.dto';
import { UpdateMateriaAsignadaProfesorDto } from './dto/update-materia-asignada-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaAsignadaProfesor } from './entities/materia-asignada-profesor.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MateriaAsignadaProfesorService {
  constructor(@InjectRepository(MateriaAsignadaProfesor) private readonly materiaAsignadaProfesorRepository: Repository<MateriaAsignadaProfesor>) {

  }
  create(createMateriaAsignadaProfesorDto: CreateMateriaAsignadaProfesorDto) {
    // return 'This action adds a new materiaAsignadaProfesor';
  }

  findAll() {
    return this.materiaAsignadaProfesorRepository.find(
      {
        relations: ['materia','profesor','unidades']
      }
    );
    // return `This action returns all materiaAsignadaProfesor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiaAsignadaProfesor`;
  }

  update(id: number, updateMateriaAsignadaProfesorDto: UpdateMateriaAsignadaProfesorDto) {
    return `This action updates a #${id} materiaAsignadaProfesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiaAsignadaProfesor`;
  }
}
