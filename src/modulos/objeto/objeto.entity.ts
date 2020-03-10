import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, EntitySchema, OneToOne, JoinColumn } from "typeorm";import { CaixaEntity } from "../caixa/caixa.entity";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
;

@Entity({
    name: 'objeto'
})
export class ObjetoEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({
        comment: '',
    })
    nome: string;

    @Column({
        comment: '',
        nullable: true,
    })
    descricao: string;

    @Column({
        comment: '',
        nullable: true,
    })
    altura: number;

    @Column({
        comment: '',
        nullable: true,
    })
    largura: number;

    @Column({
        comment: '',
        nullable: true,
    })
    comprimento: number;

    @Column({
        comment: '',
        nullable: true,
    })
    peso: number;

    @Column({
        comment: '',
        nullable: true,
    })
    cor: string;

    @Column({
        comment: '',
        nullable: true,
    })
    material: number;

    @Column({
        comment: '',
        nullable: true,
    })
    tensao: number;

    @Column({
        comment: '',
    })
    donoCodigo: number;

    @Column({
        comment: '',
        nullable: true
    })
    zeladorCodigo: number;

    @Column({
        name: 'codigo_caixa',
        comment: 'Codigo da caixa',
        nullable: true
    })
    caixaCodigo: number

    @Column({
        comment: '',
        nullable: true,
    })
    dataValidade: Date;

    @Column({
        comment: '',
        nullable: true,
    })
    chaveAcessoNotaFiscal: string;

    @Column({
        comment: '',
        nullable: true,
    })
    observacao: string;
}
