import { Repository, EntityRepository } from "typeorm";
import { TipoCaixaEntity } from "./tipoCaixa.entity";

@EntityRepository(TipoCaixaEntity)
export class TipoCaixaRepository extends Repository<TipoCaixaEntity> {

}