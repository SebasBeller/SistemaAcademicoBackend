import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import {Auth} from '../auth/auth.decorators';

@Auth(['admin','profesor','estudiante'])
@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post()
  @Auth(['admin','profesor'])
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaService.create(createAsistenciaDto);
  }

  @Post("/all")
  @Auth(['admin','profesor'])
  createAsistences(@Body() createAsistenciaDto: CreateAsistenciaDto[]) {
    return this.asistenciaService.createAsistences(createAsistenciaDto);
  }

  @Get()
  findAll() {
    return this.asistenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenciaService.findOne(+id);
  }

  @Patch(':id')
  @Auth(['admin','profesor'])
  update(@Param('id') id: string, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciaService.update(+id, updateAsistenciaDto);
  }

  @Delete(':id')
  @Auth(['admin','profesor'])
  remove(@Param('id') id: string) {
    return this.asistenciaService.remove(+id);
  }
}
