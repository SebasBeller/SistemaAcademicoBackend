import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

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
  findAllMaterialesDeunidad(id:number) {
    return this.materialRepository.find({
      where: {unidad: {id_unidad: id}}
    });
  }

  findOne(id: number) {
    return this.materialRepository.findOne({
      where: { id_material: id },
    })
  }
  findOneByName(name: string) {
    return this.materialRepository.findOne({
      where: {nombre: name}  }
    );
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    await this.findOne(id); // Verifica si el material existe
    await this.materialRepository.update(id, updateMaterialDto);
    return this.materialRepository.findOne({ where: { id_material: id } });
  }

  async remove(id: number) {
    const result = await this.materialRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Material with id ${id} not found`);
    }
    return { message: `Material with id ${id} removed successfully` };
  }
}
