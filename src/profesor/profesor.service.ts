import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorCreate } from './entities/profesorCreate.entity';

import { Repository } from 'typeorm';
@Injectable()
export class ProfesorService {
  constructor(@InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>,
  @InjectRepository(ProfesorCreate) private readonly profesorCreateRepository: Repository<ProfesorCreate>
) {

  }
  create(createProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorCreateRepository.create(createProfesorDto);
    return this.profesorCreateRepository.save(profesor);
  }

  findAll() {
    return this.profesorRepository.find();
  }

  findOneByEmail(email: string) {
    return this.profesorRepository.findOne({ where: { email } });
  }
  
  findOneByEmailWithPass(email: string) {
    return this.profesorCreateRepository.findOne({ where: { email } });
  }
  
  findOne(id: number) {
    return this.profesorRepository.findOne({ where: { id_profesor: id } });
  }
  findOneByName(name:string) {
    return this.profesorRepository.findOne({ where: { nombre:name } });
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    await this.profesorCreateRepository.update(id, updateProfesorDto);
    const updatedProfesor = await this.profesorRepository.findOne({ where: { id_profesor: id } });
    return updatedProfesor;
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.profesorRepository.delete(id);
    return { message: `Profesor con ID ${id} eliminado correctamente.` };
  }
}
