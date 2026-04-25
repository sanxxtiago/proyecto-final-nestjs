import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { DuenoService } from './dueno.service';
import { CreateDuenoDto } from './dto/create-dueno.dto';
import { UpdateDuenoDto } from './dto/update-dueno.dto';

@Controller('duenos')
export class DuenoController {
  constructor(private readonly duenoService: DuenoService) {}

  @Post()
  create(@Body() dto: CreateDuenoDto) {
    return this.duenoService.create(dto);
  }

  @Get()
  findAll() {
    return this.duenoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.duenoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDuenoDto) {
    return this.duenoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.duenoService.remove(id);
  }
}
