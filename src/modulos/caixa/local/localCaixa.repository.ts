import { Repository, EntityRepository } from "typeorm";
import { LocalCaixaEntity } from "./localCaixa.entity";

@EntityRepository(LocalCaixaEntity)
export class LocalCaixaRepository extends Repository<LocalCaixaEntity> {

}