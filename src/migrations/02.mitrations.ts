import { MigrationInterface, QueryRunner } from 'typeorm';

export class igration implements MigrationInterface {
    async up(queryRunner: QueryRunner) {
        await queryRunner.query(`ALTER TABLE "usuario" add column salt varchar(100)`);
    }

    async down(queryRunner: QueryRunner) {
        queryRunner.query('select 1 ');
    }
}
