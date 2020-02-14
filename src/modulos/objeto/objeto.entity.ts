import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, EntitySchema } from "typeorm";;

@Entity({
    name: 'objeto'
})
export class ObjetoEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({
        comment: ''
    })
    nome: string;

    @Column({
        comment: ''
    })
    descricao: string;

    @Column({
        comment: ''
    })
    altura: number;

    @Column({
        comment: ''
    })
    largura: number;

    @Column({
        comment: ''
    })
    comprimento: number;

    @Column({
        comment: ''
    })
    peso: number;

    @Column({
        comment: ''
    })
    cor: string;

    @Column({
        comment: ''
    })
    material: number;

    @Column({
        comment: ''
    })
    tensão: number;

    @Column({
        comment: ''
    })
    donoCodigo: number;

    @Column({
        comment: ''
    })
    zeladorCodigo: Number;

    @Column({
        comment: ''
    })
    dataValidade: Date;

    @Column({
        comment: ''
    })
    chaveAcessoNotaFiscal: string;

    @Column({
        comment: ''
    })
    observacao: string;
}
