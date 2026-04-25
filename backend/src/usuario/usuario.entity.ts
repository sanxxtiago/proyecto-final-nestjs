import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Veterinario } from '../veterinario/veterinario.entity';
import { Dueno } from '../dueno/dueno.entity';

export type RolUsuario = 'veterinario' | 'dueno';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre_completo' })
  nombreCompleto: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contrasena: string;

  @Column({ type: 'varchar', length: 20 })
  rol: RolUsuario;

  @OneToOne(() => Veterinario, (v) => v.usuario)
  veterinario: Veterinario;

  @OneToOne(() => Dueno, (d) => d.usuario)
  dueno: Dueno;
}
