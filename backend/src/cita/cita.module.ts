import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './cita.entity';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cita])],
  controllers: [CitaController],
  providers: [CitaService],
})
export class CitaModule {}
