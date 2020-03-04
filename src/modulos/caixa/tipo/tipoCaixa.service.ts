import {CrudService} from '../../../core/crud/crud.service'
import {TipoCaixaEntity} from './tipoCaixa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoCaixaRepository } from './tipoCaixa.repository';


@Injectable()
export class TipoCaixaService extends CrudService<TipoCaixaEntity> {
    constructor(
        @InjectRepository(TipoCaixaRepository)
        public readonly repository: TipoCaixaRepository
    ){
        super(repository);
    }
}