import {CrudService} from '../../../core/crud/crud.service'
import { LocalCaixaEntity } from './localCaixa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocalCaixaRepository } from './localCaixa.repository';


@Injectable()
export class LocalCaixaService extends CrudService<LocalCaixaEntity> {
    constructor(
        @InjectRepository(LocalCaixaRepository)
        public readonly repository: LocalCaixaRepository
    ){
        super(repository);
    }
}