import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import {NotaService} from '../nota/nota.service'
import {AsistenciaService} from '../asistencia/asistencia.service'
import {CreateAsistenciaDto} from '../asistencia/dto/create-asistencia.dto'
import type { Asistencia } from 'src/asistencia/entities/asistencia.entity';



@Controller('inscripcion')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService,
    private readonly notasService:NotaService,
    private readonly asistenciaService:AsistenciaService
  ) {}

  @Post()
  create(@Body() createInscripcionDto: CreateInscripcionDto[]) {
    console.log(createInscripcionDto)
    this.notasService.crearNotasPorDefectoDeEstudianteInscrito(createInscripcionDto);
    this.asistenciaService.createAsistenciasPorDefecto(createInscripcionDto);
    return this.inscripcionService.createAll(createInscripcionDto);

  }

  @Get()
  findAll() {
    return this.inscripcionService.findAll();
  }

  @Get('estudiante/:id')
  findAllMateriasEstudiante(@Param('id') id: string) {
    return this.inscripcionService.findAllMateriasEstudiante(+id);
  }

  @Get('estudiantes/:id')
  findAllInscritosDeMateria(@Param('id') id: string) {
    return this.inscripcionService.findEstudiantesInscritos(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inscripcionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInscripcionDto: UpdateInscripcionDto) {
    return this.inscripcionService.update(+id, updateInscripcionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inscripcionService.remove(+id);
  }
}
