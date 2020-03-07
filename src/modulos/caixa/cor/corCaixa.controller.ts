import { Controller, Get } from "@nestjs/common";
import { CrudController } from "src/core/crud/crud.controller";
import { CorCaixaService } from "./corCaixa.service";
import { CorCaixaEntity } from "./corCaixa.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Caixa Cor')
@Controller('caixa/cor')
export class CorCaixaController extends CrudController<CorCaixaEntity> {

    constructor(
        public readonly service: CorCaixaService
    ){
        super(service)
    }
    
}