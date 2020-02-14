import { Repository, EntityRepository } from "typeorm";
import { ObjetoEntity } from "./objeto.entity";


@EntityRepository(ObjetoEntity)
export class ObjetoRepository extends Repository<ObjetoEntity> {
    
}
