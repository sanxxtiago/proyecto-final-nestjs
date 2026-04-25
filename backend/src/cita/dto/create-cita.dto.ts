import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateCitaDto {
  @IsDateString()
  fechaCita: string;

  @IsString()
  motivoConsulta: string;

  @IsInt()
  mascotaId: number;

  @IsInt()
  veterinarioId: number;
}
