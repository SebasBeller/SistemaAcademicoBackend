import { Reflector } from '@nestjs/core';
import { Injectable, UnauthorizedException,ForbiddenException } from '@nestjs/common';
import {
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean>  {
    const roles = this.reflector.getAllAndOverride<string[]>("roles", [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }
    
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);

      
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado.');
    }
  
    try {
      const payload = this.jwtService.verify(token, { secret: 'secreto' });
      request.user = payload; // Adjuntar el usuario a la solicitud
      if (!roles.includes(payload.tipo)) {
        throw new ForbiddenException('Acceso denegado: no tienes los permisos necesarios.');
      }
      return true;
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error; // Re-lanza ForbiddenException para que el cliente reciba 403
      }
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('El token ha expirado.');
      } 
      if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('El token es inválido.');
      }
        throw new UnauthorizedException('Error al verificar el token.');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // console.log(type)
    return type === 'Bearer' ? token : undefined;
  }
  }
