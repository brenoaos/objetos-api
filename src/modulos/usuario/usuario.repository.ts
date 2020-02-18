import { Repository, EntityRepository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth.credentials.dto';
import * as _ from 'lodash';
import { BadRequestException } from '@nestjs/common';

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {

    async singUp(authCredentialsDto: AuthCredentialsDto): Promise<UsuarioEntity> {
        const { nomeUsuario, email, senha } = authCredentialsDto;
        const usuario = new UsuarioEntity();

        usuario.nome = '';
        usuario.sobrenome = '';

        usuario.nomeUsuario = nomeUsuario;
        usuario.email = _.lowerCase(email);
        usuario.senha = senha;
        usuario.primeiroAcesso = true;

        try {
            await usuario.save();
        } catch (err) {
            throw new BadRequestException(err.message);
        }

        return usuario;
    }

}
