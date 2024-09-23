import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParaleloService } from './paralelo.service';
import { CreateParaleloDto } from './dto/create-paralelo.dto';
import { UpdateParaleloDto } from './dto/update-paralelo.dto';

@Controller('paralelo')
export class ParaleloController {
  constructor(private readonly paraleloService: ParaleloService) {}

  @Post()
  create(@Body() createParaleloDto: CreateParaleloDto) {
    return this.paraleloService.create(createParaleloDto);
  }

  @Get()
  async findAll() {
    return await this.paraleloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paraleloService.findOne(+id);
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
