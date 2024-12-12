import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParaleloService } from './paralelo.service';
import { CreateParaleloDto } from './dto/create-paralelo.dto';
import { UpdateParaleloDto } from './dto/update-paralelo.dto';
import {Auth} from '../auth/auth.decorators';
@Auth(['admin','profesor','estudiante'])
@Controller('paralelo')
export class ParaleloController {
  constructor(private readonly paraleloService: ParaleloService) {}

  @Post()
  @Auth(['admin'])
  async create(@Body() createParaleloDto: CreateParaleloDto) {
    return await this.paraleloService.create(createParaleloDto);
  }

  @Get()
  async findAll() {
    return await this.paraleloService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.paraleloService.findOne(+id);
  }

  @Patch(':id')
  @Auth(['admin'])
  update(@Param('id') id: string, @Body() updateParaleloDto: UpdateParaleloDto) {
    return this.paraleloService.update(+id, updateParaleloDto);
  }

  @Delete(':id')
  @Auth(['admin'])
  remove(@Param('id') id: string) {
    return this.paraleloService.remove(+id);
  }
}
