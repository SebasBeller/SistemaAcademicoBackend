
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Unidad } from 'src/unidad/entities/unidad.entity';
@Entity("Material")
export class Material {
    @PrimaryGeneratedColumn()
    id_material:number;

    @Column()
    nombre:string

    @Column()
    url:string
    
    @Column()
    tipo:string

    @Column({nullable:true})
    id_unidad:number
    
    @ManyToOne(()=>Unidad,(unidad)=>unidad.materiales)
    @JoinColumn({ name: 'id_unidad' })
    unidad:Unidad
}
