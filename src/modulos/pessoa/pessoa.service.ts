import { InjectRepository } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { Pessoa } from './pessoa.entity';
import { Injectable} from '@nestjs/common';
import { CrudService } from '../../core/crud/crud.service';

@Injectable()
export class PessoaService extends CrudService<Pessoa> {
    constructor(
        @InjectRepository(PessoaRepository) public pessoaRepository: PessoaRepository,
    ) {
        super(pessoaRepository);
    }

    async inserir(objeto): Promise<Pessoa> {
        return await this.pessoaRepository.createPerson(objeto);
    }

  }
