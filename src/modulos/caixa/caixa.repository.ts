import { Repository, EntityRepository } from "typeorm";
import { CaixaEntity } from './caixa.entity'
import { CaixaTipoEnum } from "./caixa.enum";

@EntityRepository(CaixaEntity)
export class CaixaRepository extends Repository<CaixaEntity>{
    async createPerson(caixa): Promise<CaixaEntity> {
        const {altura, largura, comprimento, local, cor, tipo, observacao} = caixa
        const cx = new CaixaEntity();

        cx.altura = Number(altura);
        cx.largura = Number(largura);
        cx.comprimento = Number(comprimento);
        cx.local = local;
        cx.cor = cor;
        cx.tipo = tipo;
        cx.observacao = observacao;
        cx.caixaCodigo = 0;
        return await cx.save()
    }
}