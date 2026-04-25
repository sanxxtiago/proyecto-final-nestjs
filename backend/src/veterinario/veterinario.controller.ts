import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { VeterinarioService } from './veterinario.service';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';

@Controller('veterinarios')
export class VeterinarioController {
  constructor(private readonly veterinarioService: VeterinarioService) {}

  @Post()
  create(@Body() dto: CreateVeterinarioDto) {
    return this.veterinarioService.create(dto);
  }

  @Get()
  findAll() {
    return this.veterinarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.veterinarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVeterinarioDto) {
    return this.veterinarioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.veterinarioService.remove(id);
  }
}
