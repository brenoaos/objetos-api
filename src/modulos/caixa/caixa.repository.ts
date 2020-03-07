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
        cx.local = Number(local.split('|')[0]);
        cx.cor = Number(cor.split('|')[0]);
        cx.tipo = Number(tipo.split('|')[0]);
        cx.observacao = observacao;
        cx.caixaCodigo = 0;
        return await cx.save()
    }
}