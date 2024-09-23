import {Entity, Column, PrimaryGeneratedColumn,JoinColumn,ManyToOne,OneToMany} from 'typeorm';
import {Materia}  from 'src/materias/entities/materia.entity';
import {Profesor} from 'src/profesor/entities/profesor.entity';
import{Unidad} from '../../unidad/entities/unidad.entity';
@Entity("MateriaAsignadaProfesor") 
export class MateriaAsignadaProfesor {
    @PrimaryGeneratedColumn()
    id_dicta: number;

    @Column({type:'date'})
    fecha: Date;
    
    @ManyToOne(() => Materia,(materia)=>materia.materiasAsignadas)
    @JoinColumn({ name: 'id_materia' })
    materia:Materia

    @ManyToOne(() => Profesor,(profesor)=>profesor.materiasAsignadas)
    @JoinColumn({ name: 'id_profesor' })
    profesor:Profesor

    @OneToMany(()=>Unidad,(unidad)=>unidad.materiaAsignada)
    @JoinColumn({ name: 'id_dicta' })
    unidades:Unidad

}
