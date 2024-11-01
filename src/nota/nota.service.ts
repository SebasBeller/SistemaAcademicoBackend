import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Nota} from './entities/nota.entity'
import {CreateInscripcionDto} from '../inscripcion/dto/create-inscripcion.dto'
@Injectable()
export class NotaService {
  constructor(@InjectRepository(Nota) 
  private readonly notaRepository: Repository<Nota>){

  }
  create(createNotaDto: CreateNotaDto) {
    return this.notaRepository.save(createNotaDto);
  }

  findAll() {
    return this.notaRepository.find({
      relations:["materiaAsignada","estudiante"]
    })
  }

  crearNotasPorDefectoDeEstudianteInscrito(createInscripcionDto:CreateInscripcionDto){
    let dimensiones:string[]=["hacer","ser","decidir","saber"];
    for(let trimestre=1;trimestre<=3;trimestre++){
      dimensiones.forEach((dimension)=>{
        this.create({
          id_dicta:createInscripcionDto.id_dicta,
          id_estudiante:createInscripcionDto.id_estudiante,
          fecha:createInscripcionDto.fecha_inscripcion,
          tipo:dimension,
          trimestre:trimestre,
          nota:0,
          anio:new Date(createInscripcionDto.fecha_inscripcion).getFullYear()
        });
      });
    }
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
