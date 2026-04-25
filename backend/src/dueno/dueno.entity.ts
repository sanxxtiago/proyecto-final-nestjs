import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Mascota } from '../mascota/mascota.entity';

@Entity('dueno')
export class Dueno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'direccion_residencia' })
  direccionResidencia: string;

  @OneToOne(() => Usuario, (u) => u.dueno)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @OneToMany(() => Mascota, (m) => m.dueno)
  mascotas: Mascota[];
}
