import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn, OneToMany} from 'typeorm';
import {Paralelo} from '../../paralelo/entities/paralelo.entity'
import {Asistencia} from '../../asistencia/entities/asistencia.entity';
import {Inscripcion} from '../../inscripcion/entities/inscripcion.entity';
@Entity('Estudiante')
export class Estudiante {

    @PrimaryGeneratedColumn()
    id_estudiante:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    email:string;

    // @Column()
    // password:string;
    
    @Column()
    foto:string;

    @Column({type:'number'})
    id_paralelo:number;


    @ManyToOne(()=>Paralelo)
    @JoinColumn({ name: 'id_paralelo' })
    paralelo:Paralelo

    @OneToMany(()=>Asistencia,(asistencia=>asistencia.estudiante))
    @JoinColumn({ name: 'id_estudiante' })
    asistencias:Asistencia[]

    
    @OneToMany(()=>Inscripcion,(inscripcion=>inscripcion.estudiante))
    @JoinColumn({ name: 'id_estudiante' })
    inscripciones:Inscripcion[]

}
