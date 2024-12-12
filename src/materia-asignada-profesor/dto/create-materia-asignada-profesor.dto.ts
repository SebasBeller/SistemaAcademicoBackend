import { IsInt, IsOptional, IsString, IsDateString, IsEnum,IsISO8601 } from 'class-validator';

export class CreateMateriaAsignadaProfesorDto {
    @IsInt({ message: 'El id_materia debe ser un número entero' })
    id_materia: number;
    @IsInt({ message: 'El id_profesor debe ser un número entero' })
    id_profesor: number;
    @IsISO8601({ strict: true }, { message: 'La fecha debe ser una fecha válida en formato ISO8601' })
    fecha: string;
    @IsInt({ message: 'El anio debe ser un número entero' })
    anio?:number;


}
