import { PartialType } from '@nestjs/mapped-types';
import { CreateInscripcionDto } from './create-inscripcion.dto';

export class UpdateInscripcionDto extends PartialType(CreateInscripcionDto) {
    // id_estudiante?:number;
    // id_dicta?:number;
    // fecha_inscripcion?:string;
    // anio?:number;
}
