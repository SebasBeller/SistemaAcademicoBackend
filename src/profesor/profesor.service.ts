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

  findOne(id: number) {
    return this.profesorRepository.findOne({ where: { id_profesor: id } });
  }
  findOneByName(name:string) {
    return this.profesorRepository.findOne({ where: { nombre:name } });
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }
}
