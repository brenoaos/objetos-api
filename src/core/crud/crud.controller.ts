import { Get, Query, ParseIntPipe, Param, Post, Body } from "@nestjs/common";
import { FilterQuery } from "typeorm";
import { IObjetoQuery } from "./crud.interface";


export class CrudController<T> {
    service;

    constructor(service) {
        this.service = service;
    }


    @Get()
    getall(@Query('filtro') filtro: IObjetoQuery): Promise<T[]> {
        // let filter = req;
        return this.service.procurar(filtro);
    }

    @Get(':codigo')
    getOne(@Param('codigo', ParseIntPipe) codigo: number): Promise<T> {
        return this.service.procurarPorCodigo(codigo);
    }

    @Get('count')
    count(@Query('filtro') filtro: FilterQuery<T>): Promise<T> {
        return this.service.count(filtro);
    }

    @Post('create')
    create(@Body() objeto: object) {
        return this.service.inserir(objeto)
    }

}