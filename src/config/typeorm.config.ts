import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pessoa } from '../modulos/pessoa/pessoa.entity';
import { CaixaEntity } from '../modulos/caixa/caixa.entity';
import { ObjetoEntity } from '../modulos/objeto/objeto.entity';

const entities = [
    Pessoa,
    CaixaEntity,
    ObjetoEntity,
];

interface IBaseConfig {
    [stage: string]: TypeOrmModuleOptions;
}

const baseConfig: IBaseConfig = {
    production: {
        type: 'postgres',
        host: 'ec2-3-213-192-58.compute-1.amazonaws.com',
        port: 5432,
        username: 'ifjedywbbiztsj',
        password: '5a119d482bc8c03972cc0c5cc7c4167db76dd5ff3a136d686f149ca334a78fa3',
        database: 'd2lmaskvu2c76n',
        entities,
        ssl: true,
        synchronize: true,
    },
    developement: {
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'objetos',
        entities,
        synchronize: true,
    }
}

export const typeOrmConfig = (): TypeOrmModuleOptions => {
    let config = baseConfig.developement;

    if (process.env.NODE_ENV === 'production') {

        config = baseConfig.production;
    }

    return config;
};
