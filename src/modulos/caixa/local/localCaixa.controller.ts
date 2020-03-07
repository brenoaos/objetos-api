import { Controller, Get } from "@nestjs/common";
import { CrudController } from "src/core/crud/crud.controller";
import { LocalCaixaService } from "./localCaixa.service";
import { LocalCaixaEntity } from "./localCaixa.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Caixa Local')
@Controller('caixa/local')
export class LocalCaixaController extends CrudController<LocalCaixaEntity> {

    constructor(
        public readonly service: LocalCaixaService
    ){
        super(service)
    }
    
}