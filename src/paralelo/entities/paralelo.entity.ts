import { Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinColumn } from 'typeorm';
import { Materia } from 'src/materias/entities/materia.entity';
@Entity("Paralelo")
export class Paralelo {
    @PrimaryGeneratedColumn()
    id_paralelo: number;
    @Column()
    paralelo: string;
    @OneToMany(()=> Materia,(materia)=>materia.paralelo)
    @JoinColumn({ name: 'id_paralelo' })
    materias:Materia[]
}
