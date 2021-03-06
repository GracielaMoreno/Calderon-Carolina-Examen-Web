import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteController} from "./paciente/paciente.controller";
import {MedicamentosController} from "./medicamentos/medicamentos.controller";
import {PacienteService} from "./paciente/paciente.service";
import {MedicamentoService} from "./medicamentos/medicamento.service";
import {AutorizacionController} from "./autorizacion.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteEntity } from './paciente/paciente.entity';
import { MedicamentoEntity } from './medicamentos/medicamento.entity';
import { UsuarioService } from './Usuario/usuario.service';
import { UsuarioController } from './Usuario/usuario.controller';
import { UsuarioEntity } from './Usuario/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'modelo',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
    }),
    TypeOrmModule.forFeature([PacienteEntity,MedicamentoEntity, UsuarioEntity])
  ],
  controllers: [AppController, PacienteController, MedicamentosController, AutorizacionController, UsuarioController ],
  providers: [AppService, PacienteService, MedicamentoService, UsuarioService],
})
export class AppModule {}
