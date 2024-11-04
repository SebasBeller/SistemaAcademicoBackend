import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasModule } from './materias/materias.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ParaleloModule } from './paralelo/paralelo.module';
import { ProfesorModule } from './profesor/profesor.module';
import { MateriaAsignadaProfesorModule } from './materia-asignada-profesor/materia-asignada-profesor.module';
import { UnidadModule } from './unidad/unidad.module';
import { MaterialModule } from './material/material.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { NotaModule } from './nota/nota.module';
import {AuthModule} from './auth/auth.module'
@Module({
  imports: [MateriasModule
    ,TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '5951561010',
      database: 'boyibbdmvtozlivut10o',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: false,
    }), ParaleloModule, ProfesorModule, MateriaAsignadaProfesorModule, UnidadModule, MaterialModule,  EstudianteModule, AsistenciaModule, InscripcionModule, NotaModule,AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
