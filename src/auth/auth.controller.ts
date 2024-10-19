import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EstudianteService } from '../estudiante/estudiante.service';
import { ProfesorService } from '../profesor/profesor.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly estudianteService: EstudianteService,
    private readonly profesorService: ProfesorService
  ) {}

  @Post('register/estudiante')
  async registerEstudiante(@Body() createEstudianteDto) {
    const salt = await bcrypt.genSalt();
    createEstudianteDto.password = await bcrypt.hash(createEstudianteDto.password, salt);
    return this.estudianteService.create(createEstudianteDto);
  }

  @Post('register/profesor')
  async registerProfesor(@Body() createProfesorDto) {
    const salt = await bcrypt.genSalt();
    createProfesorDto.password = await bcrypt.hash(createProfesorDto.password, salt);
    return this.profesorService.create(createProfesorDto);
  }

  @Post('login')
  async login(@Body() loginDto: { email: string, password: string }) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}
