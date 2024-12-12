import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';
import { IsInt } from 'class-validator';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    @IsInt({ message: 'El id_estudiante debe ser un número entero' })
    id_estudiante!:number;
}

