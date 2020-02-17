import { Get, Query, ParseIntPipe, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { FilterQuery } from 'typeorm';
import { IObjetoQuery, IBaseRepository } from './crud.interface';

export class CrudController<T> {
    service;

    constructor(service) {
        this.service = service;
    }

    @Get()
    async getall(@Query('filtro') filtro: any): Promise<T[]> {
        return await this.service.procurar(filtro);
    }

    @Get(':codigo')
    async getOne(@Param('codigo', ParseIntPipe) codigo: number): Promise<T> {
        return await this.service.procurarPorCodigo(codigo);
    }

    @Get('count')
    async count(@Query('filtro') filtro: IObjetoQuery<T>): Promise<T> {
        return await this.service.count(filtro);
    }

    @Post('create')
    async create(@Body() objeto: Promise<T>) {
        return await this.service.inserir(objeto);
    }

    @Delete()
    async deletar(@Query('filtro') filtro: IObjetoQuery<T>): Promise<any> {
        return await this.service.deletar(filtro);
    }

    @Delete(':codigo')
    async deletarPorCodigo(@Param('codigo', ParseIntPipe) codigo: number): Promise<any> {
        return await this.service.deletar(codigo);
    }

    @Patch()
    async atualizar(@Body() objeto: Promise<T>): Promise<T> {
        return await this.service.atualizar(objeto);
    }
}
