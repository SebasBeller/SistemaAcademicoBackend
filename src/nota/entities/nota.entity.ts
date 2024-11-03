import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import { MateriaAsignadaProfesor } from 'src/materia-asignada-profesor/entities/materia-asignada-profesor.entity';
import {Estudiante} from 'src/estudiante/entities/estudiante.entity'
@Entity('Nota')
export class Nota {

    @PrimaryGeneratedColumn()
    id:number;

    
    @ManyToOne(() => Estudiante)
    @JoinColumn({ name: 'id_estudiante' })
    estudiante:Estudiante
    
    
    @ManyToOne(() => MateriaAsignadaProfesor)
    @JoinColumn({ name: 'id_dicta' })
    materiaAsignada:MateriaAsignadaProfesor
    @Column()
    fecha:string;
    @Column()
    trimestre:number;
    @Column()
    tipo:string;
    @Column()
    nota:number;
}
