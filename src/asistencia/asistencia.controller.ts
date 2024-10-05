import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post()
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaService.create(createAsistenciaDto);
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
  update(@Param('id') id: string, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciaService.update(+id, updateAsistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenciaService.remove(+id);
  }
}
