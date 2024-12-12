import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EstudianteService } from '../estudiante/estudiante.service';
import { ProfesorService } from '../profesor/profesor.service';
let EMAIL_ADMIN="admin123@gmail.com";
let ADMIN="$2a$12$93GjQ1MxQlri6igw/.0rvOKCWHC9NtXmRkXlAMK4B3bws/r7Akzmy";


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly estudianteService: EstudianteService,
    private readonly profesorService: ProfesorService
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    let tipo = "";
    let id=-1;
    let user=null;
    user=await this.profesorService.findOneByEmailWithPass(email) 
    ||await this.estudianteService.findOneByEmailWithPass(email)
    ||{"email":EMAIL_ADMIN,"password":ADMIN};
    if(user.id_profesor){
      tipo="profesor"
      id=user.id_profesor;
    }
    else if(user.id_estudiante){
      tipo="estudiante";
      id=user.id_estudiante;
    }
    else {
      tipo="admin";
      id=0;
    }

    if (email==user.email.toLowerCase() && await bcrypt.compare(password,user.password)) {
      return {id:id,...user,tipo:tipo};
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.email,
      id_usuario: user.id,
      tipo: user.tipo,
    };
    return {
      access_token: this.jwtService.sign(payload),
      usuario: payload,
    };
  }
  
    
  }
// }
