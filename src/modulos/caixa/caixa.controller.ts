import { Controller, Get, Query } from '@nestjs/common';
import { CaixaService } from './caixa.service';
import { CaixaEntity } from './caixa.entity';
import { CrudController } from '../../core/crud/crud.controller';
import { ApiTags } from '@nestjs/swagger';
import { ObjetoEntity } from '../objeto/objeto.entity';
import { ObjetoService } from '../objeto/objeto.service';
// import { CreatePersonDTO } from './caixa.dto';

@Controller('caixas')
@ApiTags('Caixa')
export class CaixaController extends CrudController<CaixaEntity> {
    constructor(
        private caixaService: CaixaService,
        private _objetoService: ObjetoService
    ) { super(caixaService); }

    @Get('listar-itens')
    async listarItens(
        @Query('filtro') filter: string,
    ): Promise<ObjetoEntity[]> {
        return await this._objetoService.procurar(filter);
    }
}
