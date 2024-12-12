import { IsInt, IsOptional, IsString, IsDateString, IsEnum,IsISO8601 } from 'class-validator';

export class CreateAsistenciaDto {
  @IsInt({ message: 'El id_dicta debe ser un número entero' })
  id_dicta!: number;

  @IsInt({ message: 'El id_estudiante debe ser un número entero' })
  id_estudiante!: number;
  
  @IsISO8601({ strict: true }, { message: 'La fecha_asistencia debe ser una fecha válida en formato ISO8601' })
  fecha_asistencia?: string;

  @IsOptional()
  @IsEnum(['Presente', 'Ausente','Justificado'], { message: 'El estado debe ser "Presente" o "Ausente" o "Justificado"' })
  estado?: string;
}
