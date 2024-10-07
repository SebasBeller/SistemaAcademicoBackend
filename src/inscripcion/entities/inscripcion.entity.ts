import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import {MateriaAsignadaProfesor} from '../../materia-asignada-profesor/entities/materia-asignada-profesor.entity'
import {Estudiante} from '../../estudiante/entities/estudiante.entity';
@Entity("Inscripcion")
export class Inscripcion {
  
  @PrimaryGeneratedColumn()
  id_inscripcion:number

  @Column({type:'date'})
  fecha_inscripcion:Date

  @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.inscripciones)
  @JoinColumn({ name: 'id_estudiante' })
  estudiante:Estudiante

  @ManyToOne(()=>MateriaAsignadaProfesor,(materiaAsignada)=>materiaAsignada.inscripciones)
  @JoinColumn({ name: 'id_dicta' })
  materiaAsignada:MateriaAsignadaProfesor
}