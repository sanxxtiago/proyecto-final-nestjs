import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Cita } from '../cita/cita.entity';

@Entity('veterinario')
export class Veterinario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'especialidad_medica' })
  especialidadMedica: string;

  @OneToOne(() => Usuario, (u) => u.veterinario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @OneToMany(() => Cita, (c) => c.veterinario)
  citas: Cita[];
}
