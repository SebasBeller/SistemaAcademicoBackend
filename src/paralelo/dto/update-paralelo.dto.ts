import { PartialType } from '@nestjs/mapped-types';
import { CreateParaleloDto } from './create-paralelo.dto';

export class UpdateParaleloDto extends PartialType(CreateParaleloDto) {}
