import { Injectable } from '@nestjs/common';
import { CreateMateriaAsignadaProfesorDto } from './dto/create-materia-asignada-profesor.dto';
import { UpdateMateriaAsignadaProfesorDto } from './dto/update-materia-asignada-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MateriaAsignadaProfesor } from './entities/materia-asignada-profesor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MateriaAsignadaProfesorService {
  constructor(@InjectRepository(MateriaAsignadaProfesor) private readonly materiaAsignadaProfesorRepository: Repository<MateriaAsignadaProfesor>,

) {

  }
  create(createMateriaAsignadaProfesorDto: CreateMateriaAsignadaProfesorDto) {
    createMateriaAsignadaProfesorDto.anio=new Date(createMateriaAsignadaProfesorDto.fecha).getFullYear();
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
  async findAllSignaturesMateriaAsignada() {
    return this.materiaAsignadaProfesorRepository.find(
      {
        relations: ['materia','materia.paralelo','profesor']
      }
    );
  }
  async findAllTeacherSignatures(nombre: string) {
    return await this.materiaAsignadaProfesorRepository.find({
        relations: ['materia', 'materia.paralelo', 'profesor'],
        where: { profesor: { nombre: nombre } }
    });
}


  findOne(id: number) {
    return this.materiaAsignadaProfesorRepository.findOne({
      where: { id_dicta: id },
      relations: ['materia', 'materia.paralelo','profesor','asistencias','asistencias.estudiante'],
    });
  }
  findOneWithAllAsitence(id: number) {
    return this.materiaAsignadaProfesorRepository.findOne({
      where: { id_dicta: id },
      relations: ['asistencias','asistencias.estudiante','inscripciones','inscripciones.estudiante'],
    });
  }
  
  findOneWithAllInscriptions(id: number) {
    return this.materiaAsignadaProfesorRepository.findOne({
      where: { id_dicta: id },
      relations: ['inscripciones.estudiante'],
    });
  }
  async findOneWithAllStudents(id: number) {
    const materiaAsignada = await this.materiaAsignadaProfesorRepository.findOne({
      where: { id_dicta: id },
      relations: ['inscripciones.estudiante'],
    });
  
    if (materiaAsignada && materiaAsignada.inscripciones) {
      return materiaAsignada.inscripciones.map(inscripcion => inscripcion.estudiante);
    }
  
    return [];
  }


  update(id: number, updateMateriaAsignadaProfesorDto: UpdateMateriaAsignadaProfesorDto) {
    return `This action updates a #${id} materiaAsignadaProfesor`;
  }

  remove(id: number) {

    return this.materiaAsignadaProfesorRepository.delete(id);
  }
}
