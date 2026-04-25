import { IsEmail, IsIn, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombreCompleto: string;

  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  contrasena: string;

  @IsIn(['veterinario', 'dueno'])
  rol: 'veterinario' | 'dueno';
}
