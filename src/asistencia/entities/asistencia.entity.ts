import {Entity,Column,OneToMany,PrimaryGeneratedColumn,JoinTable,JoinColumn,ManyToOne} from 'typeorm';
import {MateriaAsignadaProfesor} from '../../materia-asignada-profesor/entities/materia-asignada-profesor.entity'
import {Estudiante} from '../../estudiante/entities/estudiante.entity'
@Entity("Asistencia")
export class Asistencia {

    @PrimaryGeneratedColumn()
    id_asistencia: number;

    @Column({type:'date'})
    fecha_asistencia: Date;

    @Column()
    estado: string;


    @ManyToOne(() => Estudiante, (estudiante) => estudiante.asistencias)
    @JoinColumn({ name: 'id_estudiante' })
    estudiante: Estudiante;

    @ManyToOne(() => MateriaAsignadaProfesor, (materiaAsignada) => materiaAsignada.asistencias)
    @JoinColumn({ name: 'id_dicta' })
    materiaAsignada: MateriaAsignadaProfesor;

}
