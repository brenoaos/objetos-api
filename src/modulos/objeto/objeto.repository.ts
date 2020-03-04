import { Repository, EntityRepository } from "typeorm";
import { ObjetoEntity } from "./objeto.entity";


@EntityRepository(ObjetoEntity)
export class ObjetoRepository extends Repository<ObjetoEntity> {
    
    async createObjeto(objeto): Promise<ObjetoEntity> {
        const obj = new ObjetoEntity()
        obj.altura = Number(objeto.altura);
        obj.largura = Number(objeto.largura);
        obj.comprimento = Number(objeto.comprimento);
        obj.peso = Number(objeto.comprimento);
        obj.cor = objeto.cor;
        obj.chaveAcessoNotaFiscal= objeto.chaveAcessoNotaFiscal;
        obj.nome = objeto.nome
        obj.donoCodigo = Number(objeto.dono.split('|')[0]);
        obj.descricao = objeto.descricao,
        obj.zeladorCodigo = null,
        await obj.save();
        return obj
    }
}
