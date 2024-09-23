import { Injectable } from '@nestjs/common';
import { CreateParaleloDto } from './dto/create-paralelo.dto';
import { UpdateParaleloDto } from './dto/update-paralelo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paralelo } from './entities/paralelo.entity';

@Injectable()
export class ParaleloService {
  constructor(@InjectRepository(Paralelo) 
  private readonly materiaRepository: Repository<Paralelo>) {}

  create(createParaleloDto: CreateParaleloDto) {
    return this.materiaRepository.save(createParaleloDto);
  }

  findAll() {
    return this.materiaRepository.find();
    // return 
    // return `This action returns all paralelo`;
  }

  findOne(id: number) {
    return this.materiaRepository.findOne({
      where: {id_paralelo:id}
    })
    // return `This action returns a #${id} paralelo`;
  }

  update(id: number, updateParaleloDto: UpdateParaleloDto) {
    return `This action updates a #${id} paralelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} paralelo`;
  }
}
