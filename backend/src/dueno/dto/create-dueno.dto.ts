import { IsInt, IsString } from 'class-validator';

export class CreateDuenoDto {
  @IsString()
  direccionResidencia: string;

  @IsInt()
  usuarioId: number;
}
