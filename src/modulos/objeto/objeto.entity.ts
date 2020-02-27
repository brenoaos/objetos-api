import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, EntitySchema } from "typeorm";;

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
    tensão: number;

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
