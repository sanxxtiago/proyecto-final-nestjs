import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veterinario } from './veterinario.entity';
import { CreateVeterinarioDto } from './dto/create-veterinario.dto';
import { UpdateVeterinarioDto } from './dto/update-veterinario.dto';

@Injectable()
export class VeterinarioService {
  constructor(
    @InjectRepository(Veterinario)
    private readonly veterinarioRepository: Repository<Veterinario>,
  ) {}

  create(dto: CreateVeterinarioDto): Promise<Veterinario> {
    const veterinario = this.veterinarioRepository.create({
      especialidadMedica: dto.especialidadMedica,
      usuario: { id: dto.usuarioId },
    });
    return this.veterinarioRepository.save(veterinario);
  }

  findAll(): Promise<Veterinario[]> {
    return this.veterinarioRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Veterinario> {
    const veterinario = await this.veterinarioRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!veterinario) throw new NotFoundException(`Veterinario ${id} no encontrado`);
    return veterinario;
  }

  async update(id: number, dto: UpdateVeterinarioDto): Promise<Veterinario> {
    const veterinario = await this.findOne(id);
    const data = dto as Partial<CreateVeterinarioDto>;
    if (data.especialidadMedica) veterinario.especialidadMedica = data.especialidadMedica;
    if (data.usuarioId) veterinario.usuario = { id: data.usuarioId } as any;
    return this.veterinarioRepository.save(veterinario);
  }

  async remove(id: number): Promise<void> {
    const veterinario = await this.findOne(id);
    await this.veterinarioRepository.remove(veterinario);
  }
}
