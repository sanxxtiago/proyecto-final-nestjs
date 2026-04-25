import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  create(dto: CreateCitaDto): Promise<Cita> {
    const cita = this.citaRepository.create({
      fechaCita: dto.fechaCita,
      motivoConsulta: dto.motivoConsulta,
      mascota: { id: dto.mascotaId },
      veterinario: { id: dto.veterinarioId },
    });
    return this.citaRepository.save(cita);
  }

  findAll(): Promise<Cita[]> {
    return this.citaRepository.find({ relations: ['mascota', 'veterinario'] });
  }

  async findOne(id: number): Promise<Cita> {
    const cita = await this.citaRepository.findOne({
      where: { id },
      relations: ['mascota', 'veterinario'],
    });
    if (!cita) throw new NotFoundException(`Cita ${id} no encontrada`);
    return cita;
  }

  async update(id: number, dto: UpdateCitaDto): Promise<Cita> {
    const cita = await this.findOne(id);
    const data = dto as Partial<CreateCitaDto>;
    Object.assign(cita, data);
    if (data.mascotaId) cita.mascota = { id: data.mascotaId } as any;
    if (data.veterinarioId) cita.veterinario = { id: data.veterinarioId } as any;
    return this.citaRepository.save(cita);
  }

  async remove(id: number): Promise<void> {
    const cita = await this.findOne(id);
    await this.citaRepository.remove(cita);
  }
}
