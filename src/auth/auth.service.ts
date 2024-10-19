import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EstudianteService } from '../estudiante/estudiante.service';
import { ProfesorService } from '../profesor/profesor.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly estudianteService: EstudianteService,
    private readonly profesorService: ProfesorService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    let user:any = await this.profesorService.findOneByEmail(email) 
    let tipo:string="profesor";
    if(!user){
      tipo="estudiante";
      user=await this.estudianteService.findOneByEmail(email)
    }

    if (user && await bcrypt.compare(password, user.password)) {
      return {...user,tipo:tipo}; 
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, id_usuario: user.id_estudiante|| user.id_profesor };
    const {password,...usuario}=user
    return {
      access_token: this.jwtService.sign(payload),
      usuario
    };
  }
}
