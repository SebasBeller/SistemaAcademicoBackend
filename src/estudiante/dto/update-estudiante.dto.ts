import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';
import { IsInt,Length,IsNotEmpty,Matches } from 'class-validator';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    @IsInt({ message: 'El id_estudiante debe ser un número entero' })
    id_estudiante!:number;
    
    @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    @Length(8, 15, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres',
      })
      @Matches(/\S/, { message: 'La contraseña no puede contener solo espacios.' })
      password!: string;
}

