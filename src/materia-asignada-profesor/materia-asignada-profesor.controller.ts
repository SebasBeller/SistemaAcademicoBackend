import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';
import { CreateMateriaAsignadaProfesorDto } from './dto/create-materia-asignada-profesor.dto';
import { UpdateMateriaAsignadaProfesorDto } from './dto/update-materia-asignada-profesor.dto';
import {Auth} from '../auth/auth.decorators';


@Auth(['admin','profesor','estudiante'])
@Controller('materia-asignada-profesor')
export class MateriaAsignadaProfesorController {
  constructor(private readonly materiaAsignadaProfesorService: MateriaAsignadaProfesorService,
  ) {}

  @Post()
  @Auth(['admin'])
  async create(@Body() createMateriaAsignadaProfesorDto: CreateMateriaAsignadaProfesorDto) {
    
    return await this.materiaAsignadaProfesorService.create(createMateriaAsignadaProfesorDto);
  }
  @Get()
  async findAll() {
    return await this.materiaAsignadaProfesorService.findAll();
  }

  @Get('todas-las-materias')
  async findAllSignatures() {
    return await this.materiaAsignadaProfesorService.findAllSignaturesMateriaAsignada();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materiaAsignadaProfesorService.findOne(
      +id,
    );
  }
  @Get('asistencias/:id')
  async findOneWithAsistence(@Param('id') id: string) {
    return await this.materiaAsignadaProfesorService.findOneWithAllAsitence(
      +id,
    );
  }
  @Get('inscripciones/:id')
  async findOneWithInscription(@Param('id') id: string) {
    return await this.materiaAsignadaProfesorService.findOneWithAllInscriptions(
      +id,
    );
  }
  @Get('estudiantes/:id')
  async findOneWithStudents(@Param('id') id: string) {
    return await this.materiaAsignadaProfesorService.findOneWithAllStudents(
      +id,
    );
  }
  @Get('materias/:nombre')
  async findTecherSignatures(@Param('nombre') nombre: string) {
    return await this.materiaAsignadaProfesorService.findAllTeacherSignatures(nombre);
  }

  @Patch(':id')
  @Auth(['admin'])
  update(@Param('id') id: string, @Body() updateMateriaAsignadaProfesorDto: UpdateMateriaAsignadaProfesorDto) {
    return this.materiaAsignadaProfesorService.update(+id, updateMateriaAsignadaProfesorDto);
  }

  @Delete(':id')
  @Auth(['admin'])
  async remove(@Param('id') id: string) {
    return await this.materiaAsignadaProfesorService.remove(+id);
  }
}
