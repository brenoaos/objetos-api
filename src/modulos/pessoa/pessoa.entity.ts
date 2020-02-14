import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PessoaSexoEnum } from "./pessoa.enum";
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name: 'pessoa'
})
export class Pessoa extends BaseEntity {   
    @ApiProperty()
    @PrimaryGeneratedColumn({
        comment: 'Codigo chave do cadastro de cliente'
    })
    codigo: number;

    @ApiProperty()
    @Column({
        comment: 'Nome da pessoa'
    })
    nome: string;

    @ApiProperty()
    @Column({
        comment: 'Sobrenome da pessoa'
    })
    sobrenome: string;

    @ApiProperty()
    @Column({
        comment: 'Apelido ou nome que gostaria de ser tratado',
        nullable: true
    })
    apelido: string;

    @ApiProperty()
    @Column({
        comment: 'Sexo da pessoa \n0-Não informado.\n1-Masculino.\n2-Feminino.',
        default: 0
    })
    sexo: PessoaSexoEnum;

    @ApiProperty()
    @Column({
        default: false
    })
    bloqueado: boolean;

    @ApiProperty()
    @Column({
        default: false
    })
    isZelador: boolean;

    @ApiProperty()
    @Column({
        default: false,
    })
    isDono: boolean;

    @ApiProperty()
    @Column({
        comment: 'Data em que a pessoa foi cadastrada',
    })
    dataCadastro: Date;

    @ApiProperty()
    @Column({
        comment: 'Data da ultima alteração do cadastro de pessoa',
        nullable: true,
    })
    dataAlteracao: Date;
}