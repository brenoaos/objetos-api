import { Repository, EntityRepository } from 'typeorm';
import { BadRequestException, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { UsuarioEntity } from './usuario.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth.credentials.dto';

import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { nomeUsuario, email, senha } = authCredentialsDto;
        const usuario = new UsuarioEntity();

        usuario.nome = '';
        usuario.sobrenome = '';
        usuario.salt = await bcrypt.genSalt();
        usuario.nomeUsuario = nomeUsuario;
        usuario.email = email;
        usuario.senha = await this.hasPassword(`${usuario.nomeUsuario + senha + usuario.email}`, usuario.salt);
        usuario.primeiroAcesso = true;

        try {

            await usuario.save();

        } catch (err) {

            if (err.code === '23505') {

                throw new ConflictException('Usuario já existe');

            } else {

                throw new InternalServerErrorException(err.message);

            }
        }

    }

    async validausuario(authCredentialsDto: AuthCredentialsDto): Promise<any> {
        const { nomeUsuario, senha, email } = authCredentialsDto;
        const usuario = await this.findOne({
            where: [
                { email },
                { nomeUsuario },
            ],
        });

        if (usuario && await usuario.validatePassword(`${usuario.nomeUsuario + senha + usuario.email}`)) {

            delete usuario.salt;
            delete usuario.senha;

            return usuario;

        }

        return null;
    }

    private async hasPassword(senha, salt): Promise<string> {

        return await bcrypt.hash(senha, salt);

    }




}
