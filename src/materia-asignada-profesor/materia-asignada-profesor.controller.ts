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
  create(@Body() createMateriaAsignadaProfesorDto: CreateMateriaAsignadaProfesorDto) {
    return this.materiaAsignadaProfesorService.create(createMateriaAsignadaProfesorDto);
  }

  @Get()
  findAll() {
    return this.materiaAsignadaProfesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaAsignadaProfesorService.findOne(+id);
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
