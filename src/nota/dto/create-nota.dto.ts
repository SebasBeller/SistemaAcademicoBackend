import { IsInt, IsOptional, IsString, IsDateString, IsNumber, Min, Max,IsEnum,IsISO8601,IsNotEmpty } from 'class-validator';

export class CreateNotaDto {
    @IsInt({ message: 'El id del estudiante debe ser un número entero.' })
    id_estudiante: number;

    @IsInt({ message: 'El id del dicta debe ser un número entero.' })
    id_dicta: number;

    @IsNotEmpty({ message: 'Ingrese una fecha.' })
    fecha: string;

    @IsOptional()
    @IsInt({ message: 'El trimestre debe ser un número entero.' })
    @Min(1, { message: 'El trimestre debe ser al menos 1.' })
    @Max(3, { message: 'El trimestre no puede ser mayor a 3.' })
    trimestre?: number;

    @IsEnum(['saber', 'hacer','decidir','ser'], { message: 'El estado debe ser "saber" o "ser" o "hacer" o "decididir"' })
    @IsString({ message: 'El tipo debe ser una cadena de texto.' })
    tipo?: string;

    @IsOptional()
    @IsNumber({}, { message: 'La nota debe ser un número.' })
    @Min(30, { message: 'La nota no puede ser menor a 0.' })
    @Max(100, { message: 'La nota no puede ser mayor a 100.' })
    nota?: number;

    @IsOptional()
    @IsInt({ message: 'El año debe ser un número entero.' })
    anio?: number;
}
