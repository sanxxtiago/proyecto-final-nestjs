import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mascota } from '../mascota/mascota.entity';
import { Veterinario } from '../veterinario/veterinario.entity';

@Entity('cita')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'fecha_cita', type: 'date' })
  fechaCita: string;

  @Column({ name: 'motivo_consulta' })
  motivoConsulta: string;

  @ManyToOne(() => Mascota, (m) => m.citas)
  mascota: Mascota;

  @ManyToOne(() => Veterinario, (v) => v.citas)
  veterinario: Veterinario;
}
