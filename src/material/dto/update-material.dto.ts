import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterialDto } from './create-material.dto';
import {
    IsInt,
  } from 'class-validator';
export class UpdateMaterialDto extends PartialType(CreateMaterialDto) {
}
