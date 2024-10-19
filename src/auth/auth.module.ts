import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import {EstudianteModule} from '../estudiante/estudiante.module'
import {ProfesorModule} from '../profesor/profesor.module'
import {AuthController} from './auth.controller'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secreto', 
      signOptions: { expiresIn: '60m' }, 
    }), EstudianteModule,ProfesorModule
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers:[AuthController]
})
export class AuthModule {}
