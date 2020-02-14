import { Controller } from '@nestjs/common';
import { CrudService } from '../../core/crud/crud.service';
import { CrudController } from '../../core/crud/crud.controller';
import { ObjetoEntity } from './objeto.entity';
import { ObjetoService } from './objeto.service';
// import { ApiUseTags } from '@nestjs/swagger';

@Controller('objetos')
// @ApiUseTags('Objetos')
export class ObjetoController extends CrudController<ObjetoEntity> {
    constructor(
        private objetoService: ObjetoService
    ) {
        super(objetoService);
    }
}
