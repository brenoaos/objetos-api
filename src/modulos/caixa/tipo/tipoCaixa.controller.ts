import { Controller, Get } from "@nestjs/common";
import { CrudController } from "src/core/crud/crud.controller";
import { TipoCaixaService } from "./tipoCaixa.service";
import { TipoCaixaEntity } from "./tipoCaixa.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Caixa Tipo')
@Controller('caixa/tipo')
export class TipoCaixaController extends CrudController<TipoCaixaEntity> {

    constructor(
        public readonly service: TipoCaixaService
    ){
        super(service)
    }
    
}