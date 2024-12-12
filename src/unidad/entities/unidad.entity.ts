import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn,OneToMany } from 'typeorm';
import {MateriaAsignadaProfesor} from "../../materia-asignada-profesor/entities/materia-asignada-profesor.entity";
import {Material} from "../../material/entities/material.entity";
@Entity('Unidad')
export class Unidad {
  @PrimaryGeneratedColumn()
  id_unidad: number;
  
  @Column({nullable:false})
  id_dicta?: number

  @Column()
  nombre: string;

  @Column()
  trimestre: string;

  @Column()
  imagen_url: string;

  @ManyToOne(() => MateriaAsignadaProfesor, (materia) => materia.unidades)
  @JoinColumn({ name: 'id_dicta' })
  materiaAsignada: MateriaAsignadaProfesor

  @OneToMany(() => Material, (material) => material.unidad)
  @JoinColumn({ name: 'id_unidad' })
  materiales: Material

}
