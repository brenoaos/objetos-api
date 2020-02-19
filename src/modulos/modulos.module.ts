import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { CaixaModule } from './caixa/caixa.module';
import { ObjetoModule } from './objeto/objeto.module';

@Module({
    imports: [
        PessoaModule,
        CaixaModule,
        ObjetoModule,
    ],
})
export class ModulosModule { }
