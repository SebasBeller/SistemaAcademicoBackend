import {
    IsInt,
    IsNotEmpty,
    IsString,
    Length,
    Matches,
  } from 'class-validator';
  
export class CreateMateriaDto {
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @Length(5, 30, { message: 'El nombre de la materia debe tener entre 5 y 30 caracteres' })
    @Matches(/^(?!\s*$)[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ_-]+$/, {
        message: 'El nombre de la materia solo puede contener letras, números y espacios',
    })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    nombre:string

    @IsInt({ message: 'Paralelo invalido.' })
    id_paralelo:number
}
