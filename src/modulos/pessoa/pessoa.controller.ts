import { Controller, Param, Get, Post, Body, ParseIntPipe, Query, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.entity';
// import { CreatePersonDTO } from './pessoa.dto';
import { CrudController } from '../../core/crud/crud.controller';

@Controller('pessoas')
@ApiTags('Pessoas')
export class PessoaController extends CrudController<Pessoa> {
    constructor(
        private pessoaService: PessoaService,
    ) {
        super(pessoaService);
    }

}
