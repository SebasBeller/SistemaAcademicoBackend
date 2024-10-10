import { PartialType } from '@nestjs/mapped-types';
import { CreateAsistenciaDto } from './create-asistencia.dto';

export class UpdateAsistenciaDto extends PartialType(CreateAsistenciaDto) {
    id_asistencia!:number;
    estado:string;
    fecha_asistencia?: string;

}
