import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    id_paralelo?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    password?: string;
}

