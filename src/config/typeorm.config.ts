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
        host: 'ec2-35-172-85-250.compute-1.amazonaws.com',
        port: 5432,
        username: 'conylnfdwxsdnj',
        password: 'e66286b16dab613ba4598b16b1bfa6f0e762e42ffd8673baf3eb62b7a3b31451',
        database: 'd4uo6e64s5q72j',
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
    },
};

export const typeOrmConfig = (): TypeOrmModuleOptions => {
    let config = baseConfig.developement;

    if (process.env.NODE_ENV === 'production') {

        config = baseConfig.production;
    }

    return config;
};
