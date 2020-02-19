import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from '../modulos/usuario/usuario.entity';
import { UsuarioRepository } from '../modulos/usuario/usuario.repository';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuarioRepository)
        private repository: UsuarioRepository,
        private jwtService: JwtService,
    ) {

    }

    async signUp(authCredentials: AuthCredentialsDto): Promise<void> {

        return await this.repository.signUp(authCredentials);

    }

    async signIn(authCredentials: AuthCredentialsDto): Promise<{ accessToken: string }> {

        const usuario = await this.repository.validausuario(authCredentials);

        if (!usuario) {
            throw new UnauthorizedException('Usuario e/ou senha invalidos');
        }

        return { accessToken: await this.jwtService.sign(JSON.stringify(usuario))};
    }

}
