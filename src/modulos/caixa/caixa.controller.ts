import { Controller, Param, Get, Post, Body, ParseIntPipe, Query, Request } from "@nestjs/common";

import { CaixaService } from "./caixa.service";
import { CaixaEntity } from "./caixa.entity";
import { CrudController } from "../../core/crud/crud.controller";
// import { CreatePersonDTO } from "./caixa.dto";

@Controller('caixa')
// @ApiUseTags('Caixa')
export class CaixaController extends CrudController<CaixaEntity> {
    constructor(
        private caixaService: CaixaService,
    ) { super(caixaService) }

    
}
