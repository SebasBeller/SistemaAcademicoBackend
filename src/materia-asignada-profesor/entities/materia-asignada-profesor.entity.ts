import {Entity, Column, PrimaryGeneratedColumn,JoinColumn,ManyToOne,OneToMany} from 'typeorm';
import {Materia}  from 'src/materias/entities/materia.entity';
import {Profesor} from 'src/profesor/entities/profesor.entity';
import{Unidad} from '../../unidad/entities/unidad.entity';
import {Asistencia} from '../../asistencia/entities/asistencia.entity';
import {Inscripcion} from '../../inscripcion/entities/inscripcion.entity';
@Entity("MateriaAsignadaProfesor") 
export class MateriaAsignadaProfesor {
    @PrimaryGeneratedColumn()
    id_dicta: number;

    @Column({type:'date',nullable:false})
    fecha: Date;

    @Column()
    anio:number;
    @Column()
    id_materia:number;
    @Column()
    id_profesor:number;
    
    @ManyToOne(() => Materia,(materia)=>materia.materiasAsignadas)
    @JoinColumn({ name: 'id_materia' })
    materia:Materia

    @ManyToOne(() => Profesor,(profesor)=>profesor.materiasAsignadas)
    @JoinColumn({ name: 'id_profesor' })
    profesor:Profesor

    @OneToMany(()=>Unidad,(unidad)=>unidad.materiaAsignada)
    @JoinColumn({ name: 'id_dicta' })
    unidades:Unidad[]

    @OneToMany(()=>Asistencia,(asistencia=>asistencia.materiaAsignada))
    @JoinColumn({ name: 'id_dicta' })
    asistencias:Asistencia[]

    @OneToMany(()=>Inscripcion,(inscripcion=>inscripcion.materiaAsignada))
    @JoinColumn({ name: 'id_dicta' })
    inscripciones:Inscripcion[]

    

}
