import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProfesorService {
  constructor(@InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>) {

  }
  create(createProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  findAll() {
    return this.profesorRepository.find();
  }

  findOneByEmail(email: string) {
    return this.profesorRepository.findOne({ where: { email } });
  }
  

  findOne(id: number) {
    return this.profesorRepository.findOne({ where: { id_profesor: id } });
  }
  findOneByName(name:string) {
    return this.profesorRepository.findOne({ where: { nombre:name } });
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    await this.profesorRepository.update(id, updateProfesorDto);
    const updatedProfesor = await this.profesorRepository.findOne({ where: { id_profesor: id } });
    return updatedProfesor;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
