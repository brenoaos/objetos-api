import { FilterQuery } from 'typeorm';

export interface IBaseRepository<T> {
    procurar: (o: any) => Promise<T[]>;
    produrarPorCodigo: (o: any) => Promise<T>;
    contar: (o: any) => number;
    inserir: (o: any) => Promise<T>;
    atualizar: (o: any) => Promise<T>;
    deletar: (o: any) => boolean;
}

export interface ICrudBaseOptions {
    entityNome;
}

export class IObjetoQuery<T> {
    where: FilterQuery<T>;
    limit: number;
    offset: number;
}
