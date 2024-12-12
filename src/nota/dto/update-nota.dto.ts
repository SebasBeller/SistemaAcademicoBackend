import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';
import { IsInt,IsNotEmpty } from 'class-validator';


export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    @IsInt({ message: 'El id de la nota debe ser un número entero.' })
    id!:number;
}
