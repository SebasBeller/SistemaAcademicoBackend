import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadDto } from './create-unidad.dto';
import { IsInt, IsString, IsUrl, Length, MinLength,IsNotEmpty,Matches } from 'class-validator';

export class UpdateUnidadDto extends PartialType(CreateUnidadDto) {

    @IsInt({ message: 'El id_unidad debe ser un número entero' })
    id_unidad!: number;
}
