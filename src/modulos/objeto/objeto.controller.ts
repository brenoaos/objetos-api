import { Controller } from '@nestjs/common';
import { CrudController } from '../../core/crud/crud.controller';
import { ObjetoEntity } from './objeto.entity';
import { ObjetoService } from './objeto.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('objetos')
@ApiTags('Objetos')
export class ObjetoController extends CrudController<ObjetoEntity> {
    constructor(
        private objetoService: ObjetoService,
    ) {
        super(objetoService);
    }
}
