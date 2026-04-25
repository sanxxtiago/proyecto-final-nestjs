import { IsInt, IsString } from 'class-validator';

export class CreateMascotaDto {
  @IsString()
  nombre: string;

  @IsString()
  especie: string;

  @IsString()
  raza: string;

  @IsInt()
  duenoId: number;
}
