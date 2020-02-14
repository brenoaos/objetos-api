import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ModulosModule } from './modulos/modulos.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig()),
    ModulosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
