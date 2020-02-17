import { InjectRepository } from "@nestjs/typeorm";
import { CaixaRepository } from "./caixa.repository";
import { promises } from "fs";
import { CaixaEntity } from "./caixa.entity";
import { isObject } from "util";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CrudService } from '../../core/crud/crud.service';
// import { CreatePersonDTO } from "./caixa.dto";

@Injectable()
export class CaixaService extends CrudService<CaixaEntity> {
    constructor(
        @InjectRepository(CaixaRepository)
        private caixaRepository: CaixaRepository,
    ) {
        super(caixaRepository)
    }

    async inserir(caixa: any): Promise<CaixaEntity> {
        return this.caixaRepository.createPerson(caixa);
    }

    // async atualizar(caixa: CaixaEntity): Promise<CaixaEntity> {

    //     const lcaixa = this.procurarPorCodigo(caixa.codigo)

    //     return (await lcaixa).save({ data: caixa });

    // }

}
