import {
    IsInt,
    IsNotEmpty,
    IsString,
    IsUrl,
    IsIn,
    Length,
    Matches
  } from 'class-validator';
  
  export class CreateMaterialDto {

  
    @IsInt({ message: 'El id_unidad debe ser un número entero' })
    id_unidad: number;
  
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @Length(5, 30, { message: 'El nombre del material debe tener entre 5 y 30 caracteres' })
    @Matches(/^(?!\s*$)[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ_-]+$/, {
     message: 'El nombre del material solo puede contener letras, números y espacios',
    })
    nombre: string;
  
    @IsNotEmpty({ message: 'La URL no puede estar vacía' })
    @IsUrl({}, { message: 'La URL debe ser válida' })
    url: string;
  
    @IsNotEmpty({ message: 'El tipo no puede estar vacío' })
    @IsString({ message: 'El tipo debe ser una cadena de texto' })
    @IsIn(['Teorico', 'Practico'], {
      message: 'El tipo debe ser "video", "documento" o "enlace"',
    })
    tipo: string;
  }
  