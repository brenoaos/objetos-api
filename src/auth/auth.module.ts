import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from '../modulos/usuario/usuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
