import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaAsignadaProfesorService } from './materia-asignada-profesor.service';
import { CreateMateriaAsignadaProfesorDto } from './dto/create-materia-asignada-profesor.dto';
import { UpdateMateriaAsignadaProfesorDto } from './dto/update-materia-asignada-profesor.dto';
import{MateriasService} from '../materias/materias.service';
@Controller('materia-asignada-profesor')
export class MateriaAsignadaProfesorController {
  constructor(private readonly materiaAsignadaProfesorService: MateriaAsignadaProfesorService,
    private materiaService:MateriasService
  ) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateMateriaAsignadaProfesorDto: UpdateMateriaAsignadaProfesorDto) {
    return this.materiaAsignadaProfesorService.update(+id, updateMateriaAsignadaProfesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaAsignadaProfesorService.remove(+id);
  }
}
