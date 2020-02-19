import { BaseEntity, Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

import * as bcrypt from 'bcrypt';

@Entity({
    name: 'usuario',
})
export class UsuarioEntity extends BaseEntity {

    @ApiProperty({
        description: 'Codigo do usuario',
    })
    @PrimaryGeneratedColumn()
    codigo: number;

    @ApiProperty({
        description: 'Nome do usuario',
    })
    @Column({
        comment: 'Nome do usuario',
        nullable: false,
    })
    nome: string;

    @ApiProperty({
        description: 'Sobrenome do usuario',
    })
    @Column({
        comment: 'Sobrenome do usuario',
        nullable: false,
    })
    sobrenome: string;

    @ApiProperty({
        description: 'Nome de usuario',
    })
    @Column({
        nullable: false,
        unique: true,
    })
    nomeUsuario: string;

    @ApiProperty({
        description: 'Email do usuario',
    })
    @Column({
        nullable: false,
        unique: true,
    })
    email: string;

    @ApiHideProperty()
    @Column()
    senha: string;

    @ApiProperty({
        description: 'Vinculacao com pessoa',
    })
    @Column({
        nullable: true,
    })
    @OneToOne(type => Pessoa)
    @JoinColumn()
    pessoaCodigo: number;

    @ApiProperty()
    @Column()
    salt: string;

    @ApiProperty()
    @Column()
    primeiroAcesso: boolean;

    @ApiProperty({
    })
    @Column({
        default: new Date(),
    })
    dataInclusao: Date;

    @ApiProperty()
    @Column({
        default: new Date(),
    })
    dataAlteracao: Date;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);

        return hash === this.senha;
    }
}
