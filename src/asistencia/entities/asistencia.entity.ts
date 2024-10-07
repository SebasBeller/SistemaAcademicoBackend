import {Entity,Column,PrimaryGeneratedColumn,JoinColumn,ManyToOne,} from 'typeorm';
import {MateriaAsignadaProfesor} from '../../materia-asignada-profesor/entities/materia-asignada-profesor.entity'
import {Estudiante} from '../../estudiante/entities/estudiante.entity'
@Entity("Asistencia")
export class Asistencia {

    @PrimaryGeneratedColumn()
    id_asistencia: number;


    
    @Column({type:'date',nullable:false})
    fecha_asistencia: Date;

    @Column({type:'number'})
    id_estudiante:number;

    @Column({type:'number'})
    id_dicta:number;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.asistencias)
    @JoinColumn({ name: 'id_estudiante' })
    estudiante: Estudiante;

    @ManyToOne(() => MateriaAsignadaProfesor, (materiaAsignada) => materiaAsignada.asistencias)
    @JoinColumn({ name: 'id_dicta' })
    materiaAsignada: MateriaAsignadaProfesor;

    @Column({nullable:false,})
    estado: string;

}
