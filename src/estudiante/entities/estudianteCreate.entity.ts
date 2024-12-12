import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn, OneToMany} from 'typeorm';
import {Paralelo} from '../../paralelo/entities/paralelo.entity'
import {Asistencia} from '../../asistencia/entities/asistencia.entity';
import {Inscripcion} from '../../inscripcion/entities/inscripcion.entity';
import {Estudiante} from './estudiante.entity'
@Entity('Estudiante')
export class EstudianteCreate extends  Estudiante{
    @Column()
    password:string;

}
