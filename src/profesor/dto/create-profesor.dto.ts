import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,Matches
} from 'class-validator';
export class CreateProfesorDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @Length(2, 15, { message: 'El nombre debe tener entre 2 y 15 caracteres' })
  @Matches(/^(?!\s*$)[A-Za-zÁÉÍÓÚÜáéíóúüñÑ' ]+$/, {
    message: 'El nombre solo puede contener letras, espacios, apóstrofes y caracteres válidos en español'
  })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  @Length(2, 15, { message: 'El apellido debe tener entre 2 y 15 caracteres' })
  @Matches(/^(?!\s*$)[A-Za-zÁÉÍÓÚÜáéíóúüñÑ' ]+$/, {
    message: 'El apellido  solo puede contener letras, espacios, apóstrofes y caracteres válidos en español'
  })
  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  apellido: string;

  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido.' },
  )
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  email: string;

  @Length(8, 15, {
    message: 'La contraseña debe tener entre 8 y 15 caracteres',
  })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  password!: string;

}
