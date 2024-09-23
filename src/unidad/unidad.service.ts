import { Injectable } from '@nestjs/common';
import { CreateUnidadDto } from './dto/create-unidad.dto';
import { UpdateUnidadDto } from './dto/update-unidad.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Unidad} from "./entities/unidad.entity";
import {Repository} from "typeorm";
@Injectable()
export class UnidadService {
  constructor(@InjectRepository(Unidad) private readonly unidadRepository: Repository<Unidad>) {

  }
  create(createUnidadDto: CreateUnidadDto) {
    const newUnidad = this.unidadRepository.create(createUnidadDto);
    return this.unidadRepository.save(newUnidad);
  }

  findAll() {
    return this.unidadRepository.find(
      {
        relations: ['materiaAsignada','material']
      }
    )
  }

  findOne(id: number) {
    return this.unidadRepository.findOne({
      where: {id_unidad:id}
    })
  }
  findOneByName(name:string) {
    return this.unidadRepository.findOne({
      where: {nombre:name}
    })
  }
  update(id: number, updateUnidadDto: UpdateUnidadDto) {
    return `This action updates a #${id} unidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} unidad`;
  }
}
