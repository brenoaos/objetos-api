import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { ApiImplicitBody,  } from '@nestjs/swagger';

@Entity({
    name: 'caixa_local',
})
export class LocalCaixaEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'Codigo Principal para caixa',
    })
    codigo: number;

    @Column({
        comment: 'Local de caixa',
        unique: true,
    })
    descricao: string;
}