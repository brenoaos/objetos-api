import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { ApiImplicitBody,  } from '@nestjs/swagger';

@Entity({
    name: 'caixa_cor',
})
export class CorCaixaEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Codigo Principal para caixa',
    })
    codigo: number;

    @Column({
        comment: 'Cor da caixa',
    })
    descricao: string;
}