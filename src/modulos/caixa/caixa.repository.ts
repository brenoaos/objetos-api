import { Repository, EntityRepository } from "typeorm";
import { CaixaEntity } from './caixa.entity'
import { CaixaTipoEnum } from "./caixa.enum";

@EntityRepository(CaixaEntity)
export class CaixaRepository extends Repository<CaixaEntity>{
    createPerson(caixa) : CaixaEntity {
        return new CaixaEntity();
    }
}