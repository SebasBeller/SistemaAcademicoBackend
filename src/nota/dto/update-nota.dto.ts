import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';


export class UpdateNotaDto extends PartialType(CreateNotaDto) {
    id!:number;
    id_dicta?: number;
    fecha?:string;
    nota!:number;
}
