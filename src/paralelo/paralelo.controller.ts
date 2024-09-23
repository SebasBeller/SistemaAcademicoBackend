import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParaleloService } from './paralelo.service';
import { CreateParaleloDto } from './dto/create-paralelo.dto';
import { UpdateParaleloDto } from './dto/update-paralelo.dto';

@Controller('paralelo')
export class ParaleloController {
  constructor(private readonly paraleloService: ParaleloService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateParaleloDto: UpdateParaleloDto) {
    return this.paraleloService.update(+id, updateParaleloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paraleloService.remove(+id);
  }
}
