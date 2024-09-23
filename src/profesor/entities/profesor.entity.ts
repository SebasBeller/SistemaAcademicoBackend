import {Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinColumn} from 'typeorm';
import {MateriaAsignadaProfesor} from "../../materia-asignada-profesor/entities/materia-asignada-profesor.entity";
@Entity("Profesor")
export class Profesor {
    @PrimaryGeneratedColumn()
    id_profesor:number
    @Column()
    nombre: string

    @OneToMany(()=>MateriaAsignadaProfesor,(materiaAsignadaProfesor)=>materiaAsignadaProfesor.profesor)
    @JoinColumn({ name: 'id_profesor' })
    materiasAsignadas:MateriaAsignadaProfesor

}
