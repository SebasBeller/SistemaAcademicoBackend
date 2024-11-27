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

  async findAllYears() {
    const notas = await this.notaRepository.find();
    const anios = [...new Set(notas.map((nota) => nota.anio))];
    return anios;
  }

  crearNotasPorDefectoDeEstudianteInscrito(createInscripcionDto:CreateInscripcionDto[]){
    let dimensiones:string[]=["hacer","ser","decidir","saber"];
    let data=[]
    createInscripcionDto.forEach(inscripcion => {
    
    for(let trimestre=1;trimestre<=3;trimestre++){
      dimensiones.forEach((dimension)=>{
      let ins=
      {
            id_dicta:inscripcion.id_dicta,
            id_estudiante:inscripcion.id_estudiante,
            fecha:inscripcion.fecha_inscripcion,
            tipo:dimension,
            trimestre:trimestre,
            nota:0,
            anio:new Date(inscripcion.fecha_inscripcion).getFullYear()
          }
          data.push(ins)
      });
    }
  });
  this.notaRepository.save(data)
  }

  findOne(id: number) {
    return `This action returns a #${id} nota`;
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    return this.notaRepository.update(id,updateNotaDto);
  }

  remove(id: number) {
    return `This action removes a #${id} nota`;
  }
}
