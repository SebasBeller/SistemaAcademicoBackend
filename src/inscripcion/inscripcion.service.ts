import { Injectable } from '@nestjs/common';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscripcion } from './entities/inscripcion.entity';
import { Repository } from 'typeorm';
@Injectable()
export class InscripcionService {

  constructor(@InjectRepository(Inscripcion) private readonly inscripcionRepository: Repository<Inscripcion>,
) { }
createAll(createInscripcionDto: CreateInscripcionDto[]) {
  return this.inscripcionRepository.save(createInscripcionDto)
}
  create(createInscripcionDto: CreateInscripcionDto) {
    return this.inscripcionRepository.save(createInscripcionDto)
  }

  findAll() {
    return this.inscripcionRepository.find(
      {
        relations: ['estudiante', 'materiaAsignada.materia','materiaAsignada.materia.paralelo']
      }
    );
  }
  async findAllMateriasEstudiante(id:number) {
    const inscripciones = await this.inscripcionRepository.find({
      relations: ['materiaAsignada.materia', 'materiaAsignada.materia.paralelo', 'materiaAsignada.profesor'],
      where: { id_estudiante: id },
    });
  
    return inscripciones.map((inscripcion) => inscripcion.materiaAsignada);
  }

  async findEstudiantesInscritos(id:number) {
    const inscripciones = await this.inscripcionRepository.find({
      relations: ['estudiante'],
      where: { id_dicta: id },
    });
    return inscripciones.map((inscripcion)=>inscripcion.estudiante)
  }
  findOne(id: number) {
    return `This action returns a #${id} inscripcion`;
  }

  update(id: number, updateInscripcionDto: UpdateInscripcionDto) {
    return `This action updates a #${id} inscripcion`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscripcion`;
  }
}
