import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dueno } from './dueno.entity';
import { CreateDuenoDto } from './dto/create-dueno.dto';
import { UpdateDuenoDto } from './dto/update-dueno.dto';

@Injectable()
export class DuenoService {
  constructor(
    @InjectRepository(Dueno)
    private readonly duenoRepository: Repository<Dueno>,
  ) {}

  create(dto: CreateDuenoDto): Promise<Dueno> {
    const dueno = this.duenoRepository.create({
      direccionResidencia: dto.direccionResidencia,
      usuario: { id: dto.usuarioId },
    });
    return this.duenoRepository.save(dueno);
  }

  findAll(): Promise<Dueno[]> {
    return this.duenoRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Dueno> {
    const dueno = await this.duenoRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!dueno) throw new NotFoundException(`Dueño ${id} no encontrado`);
    return dueno;
  }

  async update(id: number, dto: UpdateDuenoDto): Promise<Dueno> {
    const dueno = await this.findOne(id);
    const data = dto as Partial<CreateDuenoDto>;
    if (data.direccionResidencia) dueno.direccionResidencia = data.direccionResidencia;
    if (data.usuarioId) dueno.usuario = { id: data.usuarioId } as any;
    return this.duenoRepository.save(dueno);
  }

  async remove(id: number): Promise<void> {
    const dueno = await this.findOne(id);
    await this.duenoRepository.remove(dueno);
  }
}
