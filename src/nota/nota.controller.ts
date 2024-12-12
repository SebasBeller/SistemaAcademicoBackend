import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotaService } from './nota.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import {Auth} from '../auth/auth.decorators';

@Auth(['admin','profesor','estudiante'])
@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @Post()
  @Auth(['profesor'])
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notaService.create(createNotaDto);
  }

  @Get()
  findAll() {
    return this.notaService.findAll();
  }

  @Get("years")
  findAllYears() {
    return this.notaService.findAllYears();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaService.findOne(+id);
  }

  @Patch(':id')
  @Auth(['profesor'])
  update(@Param('id') id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notaService.update(+id, updateNotaDto);
  }

  @Delete(':id')
  @Auth(['profesor'])
  remove(@Param('id') id: string) {
    return this.notaService.remove(+id);
  }
}
