import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MaterialService {
  constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {

  }
  create(createMaterialDto: CreateMaterialDto) {
    const material = this.materialRepository.create(createMaterialDto);
    return this.materialRepository.save(material);
  }

  findAll() {
    return this.materialRepository.find({
      relations: ['unidad']
    });
  }

  findOne(id: number) {
    return this.materialRepository.findOne({
      where: { id_material: id }
    })
  }
  findOneByName(name: string) {
    return this.materialRepository.findOne({
      where: {nombre: name}  }
    );
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return `This action updates a #${id} material`;
  }

  remove(id: number) {
    return `This action removes a #${id} material`;
  }
}
