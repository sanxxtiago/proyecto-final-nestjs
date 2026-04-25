import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascotas')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post()
  create(@Body() dto: CreateMascotaDto) {
    return this.mascotaService.create(dto);
  }

  @Get()
  findAll() {
    return this.mascotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mascotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMascotaDto) {
    return this.mascotaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mascotaService.remove(id);
  }
}
