import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dueno } from './dueno.entity';
import { DuenoService } from './dueno.service';
import { DuenoController } from './dueno.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dueno])],
  controllers: [DuenoController],
  providers: [DuenoService],
  exports: [DuenoService],
})
export class DuenoModule {}
