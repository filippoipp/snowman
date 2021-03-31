import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFollowTable1617137831153 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(new Table({
            name: 'following',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'following_id',
                    type: 'uuid',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('following');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
