import { MigrationInterface, QueryRunner } from 'typeorm';

export class igration implements MigrationInterface {
    async up(queryRunner: QueryRunner) {
        await queryRunner.query(`ALTER TABLE "objeto" add column column codigo_caixa number`);
    }

    async down(queryRunner: QueryRunner) {
        queryRunner.query('select 1 ');
    }
}
