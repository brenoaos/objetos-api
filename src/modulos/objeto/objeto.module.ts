import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto.controller';
import { ObjetoService } from './objeto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjetoRepository } from './objeto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ObjetoRepository])],
  controllers: [ObjetoController],
  providers: [ObjetoService]
})
export class ObjetoModule {}
