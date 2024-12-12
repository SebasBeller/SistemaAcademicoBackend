import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import {Materia} from "./entities/materia.entity";

import {Auth} from '../auth/auth.decorators';
@Auth(['admin','profesor','estudiante'])
@Controller('materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Post()
  @Auth(['admin'])
  async create(@Body() createMateriaDto: CreateMateriaDto) {
    return await this.materiasService.create(createMateriaDto);
  }

  @Get()
  async findAll(): Promise<Materia[]> {
    return await this.materiasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.materiasService.findOne(+id);
  }
  @Get('/find_by_name/:name')
  async findOneByName(@Param('name') name: string) {
    return await this.materiasService.findOneByName(name);
  }

  @Patch(':id')
  @Auth(['admin'])
  update(@Param('id') id: string, @Body() updateMateriaDto: UpdateMateriaDto) {
    return this.materiasService.update(+id, updateMateriaDto);
  }

  @Delete(':id')
  @Auth(['admin'])
  remove(@Param('id') id: string) {
    return this.materiasService.remove(+id);
  }
}
