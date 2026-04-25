import { IsInt, IsString } from 'class-validator';

export class CreateVeterinarioDto {
  @IsString()
  especialidadMedica: string;

  @IsInt()
  usuarioId: number;
}
