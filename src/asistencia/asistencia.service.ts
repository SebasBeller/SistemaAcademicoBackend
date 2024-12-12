import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Asistencia} from "./entities/asistencia.entity";
import { Repository } from 'typeorm';
import {CreateInscripcionDto} from '../inscripcion/dto/create-inscripcion.dto'
@Injectable()
export class AsistenciaService {
  constructor(@InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>){

  }
  create(createAsistenciaDto: CreateAsistenciaDto) {
    const fechaAsistencia = new Date(createAsistenciaDto.fecha_asistencia);
    return  this.asistenciaRepository.save(createAsistenciaDto);
  }

  createAsistences(createAsistenciaDto: CreateAsistenciaDto[]) {
    createAsistenciaDto.forEach((asistencia) => {
      const fechaAsistencia = new Date(asistencia.fecha_asistencia);
      const formattedDate = fechaAsistencia.toISOString().slice(0, 19).replace('T', ' ');
      asistencia.fecha_asistencia = formattedDate;
    })
    return  this.asistenciaRepository.save(createAsistenciaDto);
  }
  async createAsistenciasPorDefecto(createInscripcionDto: CreateInscripcionDto[]) {
    let data = [];
    for (const inscripcion of createInscripcionDto) {
      await this.crearAsistenciaPorDefecto(inscripcion, data);
    }
    this.asistenciaRepository.save(data)
  }
  
  async crearAsistenciaPorDefecto(createInscripcionDto:CreateInscripcionDto,data:any[]){
    await this.findAll().then((response)=>{
      let fechasAsistencias:any=response.filter((asistencia)=>(
        new Date(asistencia.fecha_asistencia).getFullYear()==createInscripcionDto.anio && 
      asistencia.id_dicta==createInscripcionDto.id_dicta 

    )
      ).map((result)=>result.fecha_asistencia);
      fechasAsistencias=new Set(fechasAsistencias);
      fechasAsistencias.forEach((fecha)=>{
        let asistencia={
          id_dicta:createInscripcionDto.id_dicta,
          estado:"Justificado",
          fecha_asistencia:fecha,
          id_estudiante:createInscripcionDto.id_estudiante
        }
        data.push(asistencia)
      })
    });
  }


  findAll() {
    return this.asistenciaRepository.find({
      relations: ['estudiante','materiaAsignada']

    });
  }

  findOne(id: number) {
    return `This action returns a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciaRepository.update(id, updateAsistenciaDto);
  }


  remove(id: number) {
    return this.asistenciaRepository.delete(id)
  }

    
  async eliminarAsistenciasMatAsignadaDeEstudiante(id_dicta: number,id_estudiante:number,anio:number
  ) {
    let data=(await this.findAll()).filter((asistencia)=>asistencia.id_dicta==id_dicta&&asistencia.id_estudiante==id_estudiante&& new Date(asistencia.fecha_asistencia).getFullYear()===anio);
    // console.log(data)
    return await this.asistenciaRepository.remove(data);
  }
}
