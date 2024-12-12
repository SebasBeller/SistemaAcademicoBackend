import { IsInt, IsOptional, IsString, IsDateString, IsEnum,IsISO8601 } from 'class-validator';


export class CreateInscripcionDto {
    @IsInt({ message: 'El id_estudiante debe ser un número entero' })
    id_estudiante:number;
    @IsInt({ message: 'El id_dicta debe ser un número entero' })
    id_dicta:number;
    @IsISO8601({ strict: true }, { message: 'La fecha_inscripcion debe ser una fecha válida en formato ISO8601' })
    fecha_inscripcion:string;
    @IsInt({ message: 'El anio debe ser un numero' })
    anio:number;

}
