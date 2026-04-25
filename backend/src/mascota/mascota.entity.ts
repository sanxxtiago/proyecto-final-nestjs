import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dueno } from '../dueno/dueno.entity';
import { Cita } from '../cita/cita.entity';

@Entity('mascota')
export class Mascota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @ManyToOne(() => Dueno, (d) => d.mascotas)
  dueno: Dueno;

  @OneToMany(() => Cita, (c) => c.mascota)
  citas: Cita[];
}
