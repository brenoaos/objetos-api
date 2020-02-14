import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaixaRepository } from './caixa.repository';
import { CaixaService } from './caixa.service';
import { CaixaController } from './caixa.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CaixaRepository])
    ],
    providers: [CaixaService],
    controllers: [CaixaController]
})
export class CaixaModule {}
