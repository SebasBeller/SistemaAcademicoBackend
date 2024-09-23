import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriaAsignadaProfesorDto } from './create-materia-asignada-profesor.dto';

export class UpdateMateriaAsignadaProfesorDto extends PartialType(CreateMateriaAsignadaProfesorDto) {}
