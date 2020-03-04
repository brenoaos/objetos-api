import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { ApiImplicitBody,  } from '@nestjs/swagger';

@Entity({
    name: 'caixa',
})
export class TipoCaixaEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Codigo Principal para caixa',
    })
    codigo: number;

    @Column({
        comment: 'Tipo de caixa',
    })
    tipo: string;
}