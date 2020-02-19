import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from '../modulos/usuario/usuario.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '53e1b73f26589f7d34a224ead0ba9651',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
