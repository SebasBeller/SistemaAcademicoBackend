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
    const nuevaMateriaAsignada=this.materiaAsignadaProfesorRepository.create(createMateriaAsignadaProfesorDto);
    return this.materiaAsignadaProfesorRepository.save(nuevaMateriaAsignada);
  }

  findAll() {
    return this.materiaAsignadaProfesorRepository.find(
      {
        relations: ['materia','profesor','unidades']
      }
    );
  }

  findOne(id: number) {
    return this.materiaAsignadaProfesorRepository.findOne({where:{ id_dicta:id}  });
  }

  update(id: number, updateMateriaAsignadaProfesorDto: UpdateMateriaAsignadaProfesorDto) {
    return `This action updates a #${id} materiaAsignadaProfesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiaAsignadaProfesor`;
  }
}
