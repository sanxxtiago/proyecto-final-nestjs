import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { VeterinarioModule } from './veterinario/veterinario.module';
import { DuenoModule } from './dueno/dueno.module';
import { MascotaModule } from './mascota/mascota.module';
import { CitaModule } from './cita/cita.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    UsuarioModule,
    VeterinarioModule,
    DuenoModule,
    MascotaModule,
    CitaModule,
  ],
})
export class AppModule {}
