import {Auth} from '../auth/auth.decorators';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadService } from './unidad.service';
import { CreateUnidadDto } from './dto/create-unidad.dto';
import { UpdateUnidadDto } from './dto/update-unidad.dto';

@Auth(['admin','profesor','estudiante'])
@Controller('unidad')
export class UnidadController {
  constructor(private readonly unidadService: UnidadService) {}

  @Post()
  @Auth(['profesor'])
  create(@Body() createUnidadDto: CreateUnidadDto) {
    return this.unidadService.create(createUnidadDto);
  }

  @Get()
  findAll() {
    return this.unidadService.findAll();
  }
  @Get("materia-asignada/:id")
  findAllUnidadesDeMateriaAsignada(@Param('id') id: string) {
    return this.unidadService.findAllUnidadesDeMateriaAsignada(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadService.findOne(+id);
  }

  @Get(':name')
  findOneByName(@Param('name') name: string) {
    return this.unidadService.findOneByName(name);
  }
  
  @Patch(':id')
  @Auth(['profesor'])
  update(@Param('id') id: string, @Body() updateUnidadDto: UpdateUnidadDto) {
    return this.unidadService.update(+id, updateUnidadDto);
  }

  @Delete(':id')
  @Auth(['profesor'])
  remove(@Param('id') id: string) {
    return this.unidadService.remove(+id);
  }
}
