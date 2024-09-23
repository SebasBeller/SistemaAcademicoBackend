import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Materia} from "./entities/materia.entity";
import {Repository} from "typeorm";
import {ParaleloService} from "src/paralelo/paralelo.service";
@Injectable()
export class MateriasService {
  constructor(@InjectRepository(Materia) 
  private readonly materiaRepository: Repository<Materia>,
  private paraleloService: ParaleloService
) {}

  create(createMateriaDto: CreateMateriaDto) {
    const nuevaMateria=this.materiaRepository.create(createMateriaDto);
    return this.materiaRepository.save(nuevaMateria);
  }

  async findAll() {
    return await this.materiaRepository.find({
      relations: ['paralelo']
    });
  }

  findOne(id: number) {
    return this.materiaRepository.findOne({
      where: {id_materia:id}
    });
  }
  findOneByName(name:string) {
    return this.materiaRepository.findOne({
      where: {
        nombre:name
      }
    });
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return this.materiaRepository.delete( {id_materia:id});
  }

}
