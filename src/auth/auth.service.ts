import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../modulos/usuario/usuario.entity';
import { UsuarioRepository } from '../modulos/usuario/usuario.repository';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsuarioRepository)
        private repository: UsuarioRepository,
    ) {

    }

    async singUp(authCredentials: AuthCredentialsDto): Promise<UsuarioEntity> {
       return await this.repository.singUp(authCredentials);
    }

}
