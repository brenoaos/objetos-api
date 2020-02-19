import { Controller } from '@nestjs/common';
import { CaixaService } from './caixa.service';
import { CaixaEntity } from './caixa.entity';
import { CrudController } from '../../core/crud/crud.controller';
import { ApiTags } from '@nestjs/swagger';
// import { CreatePersonDTO } from './caixa.dto';

@Controller('caixas')
@ApiTags('Caixa')
export class CaixaController extends CrudController<CaixaEntity> {
    constructor(
        private caixaService: CaixaService,
    ) { super(caixaService); }

}
