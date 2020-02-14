import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { CorEnum } from '../../core/enum/cor.enum';
import { CaixaTipoEnum } from './caixa.enum';
// import { ApiImplicitBody,  } from '@nestjs/swagger';

@Entity({
    name: 'caixa'
})
export class CaixaEntity extends BaseEntity{

    @PrimaryGeneratedColumn({
        comment: 'Codigo Principal para caixa'
    })
    codigo: number;
    
    @Column({
        comment: 'Tipo de caixa'
    })
    tipo: CaixaTipoEnum;
    
    @Column({
        comment: 'Cor da caixa'
    })
    cor: CorEnum;
    
    @Column({
        comment: 'Altura de caixa'
    })
    altura: number;
    
    @Column({
        comment: 'Largura de caixa'
    })
    largura: number;

    @Column({
        comment: 'Comprimento de caixa'
    })
    comprimento: number;

    @Column({
        comment: 'Codigo de caixa mae'
    })
    caixaCodigo: number;

    @Column({
        comment: 'Local de armazenamento de caixa'
    })
    local: string;

    @Column({
        comment: 'Observação'
    })
    observacao: string;
}