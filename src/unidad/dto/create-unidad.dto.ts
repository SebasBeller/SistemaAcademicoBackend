import { IsInt, IsString, IsUrl, Length ,MinLength,IsNotEmpty, Matches} from 'class-validator';

export class CreateUnidadDto {
  @IsInt({ message: 'El id_dicta debe ser un número entero' })
  id_dicta!: number;

  @IsString({ message: 'El nombre de la unidad debe ser una cadena de texto' })
  @Length(3, 30, { message: 'El nombre de la unidad debe tener entre 3 y 30 caracteres' })
  @Matches(/^(?!\s*$)[a-zA-Z0-9\sáéíóúüñÁÉÍÓÚÜÑ_-]+$/, {
   message: 'El nombre de la unidad solo puede contener letras, números y espacios',
  })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre!: string;

  @IsString({ message: 'El trimestre debe ser una cadena de texto' })
  @MinLength(1, { message: 'El trimestre tiene que tener al menos 1 caracter' })
  trimestre!: string;

  @IsUrl({}, { message: 'El url de la imagen debe ser una URL válida' })
  @IsNotEmpty({ message: 'La url de la imagen no puede estar vacía' })
  imagen_url!: string;
}
