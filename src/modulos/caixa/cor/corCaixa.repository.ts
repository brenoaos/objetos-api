import { Repository, EntityRepository } from "typeorm";
import { CorCaixaEntity } from "./corCaixa.entity";

@EntityRepository(CorCaixaEntity)
export class CorCaixaRepository extends Repository<CorCaixaEntity> {

}