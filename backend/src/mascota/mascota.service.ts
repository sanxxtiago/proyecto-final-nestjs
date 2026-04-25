import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotaService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepository: Repository<Mascota>,
  ) {}

  create(dto: CreateMascotaDto): Promise<Mascota> {
    const mascota = this.mascotaRepository.create({
      nombre: dto.nombre,
      especie: dto.especie,
      raza: dto.raza,
      dueno: { id: dto.duenoId },
    });
    return this.mascotaRepository.save(mascota);
  }

  findAll(): Promise<Mascota[]> {
    return this.mascotaRepository.find({ relations: ['dueno'] });
  }

  async findOne(id: number): Promise<Mascota> {
    const mascota = await this.mascotaRepository.findOne({
      where: { id },
      relations: ['dueno'],
    });
    if (!mascota) throw new NotFoundException(`Mascota ${id} no encontrada`);
    return mascota;
  }

  async update(id: number, dto: UpdateMascotaDto): Promise<Mascota> {
    const mascota = await this.findOne(id);
    const data = dto as Partial<CreateMascotaDto>;
    Object.assign(mascota, data);
    if (data.duenoId) mascota.dueno = { id: data.duenoId } as any;
    return this.mascotaRepository.save(mascota);
  }

  async remove(id: number): Promise<void> {
    const mascota = await this.findOne(id);
    await this.mascotaRepository.remove(mascota);
  }
}
