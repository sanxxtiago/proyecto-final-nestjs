import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinario } from './veterinario.entity';
import { VeterinarioService } from './veterinario.service';
import { VeterinarioController } from './veterinario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Veterinario])],
  controllers: [VeterinarioController],
  providers: [VeterinarioService],
  exports: [VeterinarioService],
})
export class VeterinarioModule {}
