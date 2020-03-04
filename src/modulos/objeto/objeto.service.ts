import { Injectable } from '@nestjs/common';
import { CrudService } from '../../core/crud/crud.service';
import { ObjetoEntity } from './objeto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjetoRepository } from './objeto.repository';

@Injectable()
export class ObjetoService extends CrudService<ObjetoEntity> {
    constructor(
        @InjectRepository(ObjetoRepository)
        public objetoRepository: ObjetoRepository
    ) {
        super(objetoRepository)
    }

    async inserir(objeto: ObjetoEntity): Promise<ObjetoEntity> {
        return await this.objetoRepository.createObjeto(objeto);
    }
}
