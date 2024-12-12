import { applyDecorators, UseGuards } from '@nestjs/common';
// import { Role } from '../../common/enums/rol.enum';
import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

export function Auth(roles: string[]) {
  return applyDecorators(Roles(roles), UseGuards(AuthGuard, RolesGuard));
}