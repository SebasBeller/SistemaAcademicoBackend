import {Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn,OneToMany} from 'typeorm';
import { MateriaAsignadaProfesor } from 'src/materia-asignada-profesor/entities/materia-asignada-profesor.entity';
import {Estudiante} from '../../estudiante/entities/estudiante.entity'
@Entity('Nota')
export class Nota {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    id_estudiante:number;
    @Column()
    id_dicta:number;

    
    @ManyToOne(() => Estudiante)
    @JoinColumn({ name: 'id_estudiante' })
    estudiante:Estudiante
    
    
    @ManyToOne(() => MateriaAsignadaProfesor)
    @JoinColumn({ name: 'id_dicta' })
    materiaAsignada:MateriaAsignadaProfesor
    @Column()
    fecha:Date;
    @Column()
    trimestre:number;
    @Column()
    tipo:string;
    @Column()
    nota:number;
    @Column()
    anio:number;

}
