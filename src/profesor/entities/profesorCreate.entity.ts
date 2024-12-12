import {Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinColumn} from 'typeorm';
import{Profesor} from "./profesor.entity"
import {MateriaAsignadaProfesor} from "../../materia-asignada-profesor/entities/materia-asignada-profesor.entity";
@Entity("Profesor")
export class ProfesorCreate extends Profesor{

    @Column()
    password:string;

}
