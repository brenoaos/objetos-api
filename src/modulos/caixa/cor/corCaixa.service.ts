import { CrudService } from '../../../core/crud/crud.service'
import { CorCaixaEntity } from './corCaixa.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CorCaixaRepository } from './corCaixa.repository';

@Injectable()
export class CorCaixaService extends CrudService<CorCaixaEntity> {
    constructor(
        @InjectRepository(CorCaixaRepository)
        public readonly repository: CorCaixaRepository
    ) {
        super(repository);
    }
}