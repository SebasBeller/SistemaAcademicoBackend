import { Controller, Post, Body, Patch, Param, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EstudianteService } from '../estudiante/estudiante.service';
import { ProfesorService } from '../profesor/profesor.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './login.dto';
import { LoginAttemptsService } from './login-attemps.service';
import {AppConstants} from '../constants';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import {CreateEstudianteDto} from "../estudiante/dto/create-estudiante.dto"
import {UpdateEstudianteDto} from "../estudiante/dto/update-estudiante.dto"
import {CreateProfesorDto} from "../profesor/dto/create-profesor.dto"
import {UpdateProfesorDto} from "../profesor/dto/update-profesor.dto"

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly estudianteService: EstudianteService,
    private readonly profesorService: ProfesorService,
    private readonly loginAttemptsService: LoginAttemptsService
  ) {}

  @Post('register/estudiante')
  async registerEstudiante(@Body() createEstudianteDto:CreateEstudianteDto) {
    const salt = await bcrypt.genSalt();
    createEstudianteDto.password = await bcrypt.hash(createEstudianteDto.password, salt);
    return this.estudianteService.create(createEstudianteDto);
  }

  @Patch('update/estudiante/:id')
  async updateEstudiante(@Body() updateEstudianteDto:UpdateEstudianteDto, @Param('id') id: string) {
    const salt = await bcrypt.genSalt();
    if (updateEstudianteDto.password) {
      updateEstudianteDto.password = await bcrypt.hash(updateEstudianteDto.password, salt);
    }
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Post('register/profesor')
  async registerProfesor(@Body() createProfesorDto:CreateProfesorDto) {
    const salt = await bcrypt.genSalt();
    createProfesorDto.password = await bcrypt.hash(createProfesorDto.password, salt);
    return this.profesorService.create(createProfesorDto);
  }

  @Patch('update/profesor/:id')
  async updateProfesor(@Body() updateProfesorDto:UpdateProfesorDto, @Param('id') id: string) {
    const salt = await bcrypt.genSalt();
    if (updateProfesorDto.password) {
      updateProfesorDto.password = await bcrypt.hash(updateProfesorDto.password, salt);
    }
    return this.profesorService.update(+id, updateProfesorDto);
  }

  @Post('login')
  async login(@Body() body: any) {
    const loginDto = plainToInstance(LoginDto, body);
    const errors = await validate(loginDto);
    const email = loginDto.email.toLowerCase();

    this.loginAttemptsService.checkLockout(email);
    if (errors.length > 0) {
      this.loginAttemptsService.registerFailedAttempt(email);
      throw new BadRequestException(AppConstants.LOGIN_MESSAGE_ERROR);
    }

    const user = await this.authService.validateUser(email, loginDto.password);
    if (!user) {
      this.loginAttemptsService.registerFailedAttempt(email);
      throw new UnauthorizedException(AppConstants.LOGIN_MESSAGE_ERROR);
    }

    this.loginAttemptsService.resetAttempts(email);

    return this.authService.login(user);
  }
}
