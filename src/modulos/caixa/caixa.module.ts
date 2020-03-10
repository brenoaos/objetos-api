import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaixaRepository } from './caixa.repository';
import { CaixaService } from './caixa.service';
import { CaixaController } from './caixa.controller';
import { TipoCaixaController } from './tipo/tipoCaixa.controller';
import { TipoCaixaService } from './tipo/tipoCaixa.service';
import { TipoCaixaRepository } from './tipo/tipoCaixa.repository';
import { CorCaixaRepository } from './cor/corCaixa.repository';
import { LocalCaixaRepository } from './local/localCaixa.repository';
import { CorCaixaController } from './cor/corCaixa.controller';
import { LocalCaixaController } from './local/localCaixa.controller';
import { LocalCaixaService } from './local/localCaixa.service';
import { CorCaixaService } from './cor/corCaixa.service';
import { ObjetoService } from '../objeto/objeto.service';
import { ObjetoModule } from '../objeto/objeto.module';
import { ObjetoRepository } from '../objeto/objeto.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([CaixaRepository, TipoCaixaRepository, CorCaixaRepository, LocalCaixaRepository, ObjetoRepository]),
        ObjetoModule,
    ],
    controllers: [
        CaixaController,
        TipoCaixaController,
        CorCaixaController, 
        LocalCaixaController,
    ],
    providers: [
        CaixaService,
        TipoCaixaService,
        LocalCaixaService,
        CorCaixaService,
        ObjetoService,
    ],
    
})
export class CaixaModule {}
