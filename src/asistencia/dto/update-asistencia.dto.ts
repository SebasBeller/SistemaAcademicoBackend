import { PartialType} from '@nestjs/mapped-types';
import { CreateAsistenciaDto } from './create-asistencia.dto';
import { IsInt, IsOptional, IsString, IsDateString, IsEnum,IsISO8601 } from 'class-validator';

export class UpdateAsistenciaDto extends PartialType(CreateAsistenciaDto) {
    @IsInt({ message: 'El id_asistencia debe ser un número entero' })
    id_asistencia!:number;
    // @IsEnum(['Presente', 'Ausente','Justificado'], { message: 'El estado debe ser "Presente" o "Ausente" o "Justificado"' })
    // estado:string;
    // @IsISO8601({ strict: true }, { message: 'La fecha_asistencia debe ser una fecha válida en formato ISO8601' })
    // fecha_asistencia?: string;

}
