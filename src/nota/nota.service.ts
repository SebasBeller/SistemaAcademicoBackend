import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Nota} from './entities/nota.entity'
@Injectable()
export class NotaService {
  constructor(@InjectRepository(Nota) 
  private readonly materiaRepository: Repository<Nota>){

  }
  create(createNotaDto: CreateNotaDto) {
    return this.materiaRepository.save(createNotaDto)
  }

  findAll() {
    return this.materiaRepository.find({
      relations:["materiaAsignada","estudiante"]
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} nota`;
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    return `This action updates a #${id} nota`;
  }

  remove(id: number) {
    return `This action removes a #${id} nota`;
  }
}
