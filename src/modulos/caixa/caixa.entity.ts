import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { join } from 'path';
import { TipoCaixaEntity } from './tipo/tipoCaixa.entity';
import { CorCaixaEntity } from './cor/corCaixa.entity';
import { LocalCaixaEntity } from './local/localCaixa.entity';
// import { ApiImplicitBody,  } from '@nestjs/swagger';

@Entity({
    name: 'caixa',
})
export class CaixaEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Codigo Principal para caixa',
    })
    codigo: number;

    @Column({
        comment: 'Tipo de caixa',
    })
    @OneToOne(type => TipoCaixaEntity)
    @JoinColumn()
    tipo: number;

    @Column({
        comment: 'Cor da caixa',
    })
    @OneToOne(type => CorCaixaEntity)
    @JoinColumn()
    cor: number;

    @Column({
        comment: 'Altura de caixa',
    })
    altura: number;

    @Column({
        comment: 'Largura de caixa',
    })
    largura: number;

    @Column({
        comment: 'Comprimento de caixa',
    })
    comprimento: number;

    @Column({
        comment: 'Codigo de caixa mae',
    })
    caixaCodigo: number;

    @Column({
        comment: 'Local de armazenamento de caixa',
    })
    @OneToOne(type => LocalCaixaEntity)
    @JoinColumn()
    local: number;

    @Column({
        comment: 'Observação',
    })
    observacao: string;
}
