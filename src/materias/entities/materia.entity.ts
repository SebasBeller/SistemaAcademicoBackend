import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import {Paralelo} from 'src/paralelo/entities/paralelo.entity';
import { MateriaAsignadaProfesor } from 'src/materia-asignada-profesor/entities/materia-asignada-profesor.entity';
@Entity('Materia')
export class Materia {
    @PrimaryGeneratedColumn()
    id_materia:number
    @Column()
    nombre:string

    @Column()
    id_paralelo:number;
   
    @ManyToOne(() => Paralelo,(paralelo)=>paralelo.materias)
    @JoinColumn({ name: 'id_paralelo' })
    paralelo:Paralelo
   
    @OneToMany(() => MateriaAsignadaProfesor,(materiaAsignadaProfesor)=>materiaAsignadaProfesor.materia)
    @JoinColumn({ name: 'id_materia' })
    materiasAsignadas:MateriaAsignadaProfesor[]


}
