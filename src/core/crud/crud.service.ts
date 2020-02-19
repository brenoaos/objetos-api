import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FilterQuery, Repository } from 'typeorm';
import { Query } from 'typeorm/driver/Query';
import { IObjetoQuery } from './crud.interface';
import { isObject } from 'util';

@Injectable()
export class CrudService<T> {
    public repository: Repository<T>;

    constructor(rep) {
        this.repository = rep;
    }

    async count(filter: FilterQuery<T>) {
        return await this.repository.count(filter);
    }

    async procurar(filter): Promise<any> {

        try {
            filter = JSON.parse(filter);
        } catch (e) {
            filter = {};
        }

        // if (!filter.take) filter.take = 50;

        const registros = await this.repository.find(filter);

        // if (registros.length <= 0) throw new NotFoundException(`Nenhum registro foi encontrado.`)

        return {
            quantidadeTotal: await this.count({}).then((n) => n),
            quantidade: registros.length,
            registros,
        };
    }

    async procurarPorCodigo(codigo: number | string): Promise<T> {

        const registro = await this.repository.findOne(codigo);

        if (!registro) { throw new NotFoundException(`Nenhum registro com o codigo ${codigo} foi encontrado.`); }

        return registro;

    }

    async deletar(codigo) {
        const obj = await this.procurarPorCodigo(codigo);

        if (!obj) {

            throw new NotFoundException(`Nenhum objeto encontrado.`);

        }

        const del = await this.repository.delete(obj);

        if (del.affected === 0) {

            throw new NotFoundException(`Nenhum objeto encontrado.`);

        }

        return true;
    }

    async atualizar(objeto): Promise<T> {

        objeto.dataAlteracao = new Date();

        return await this.repository.save(objeto);

    }

}
