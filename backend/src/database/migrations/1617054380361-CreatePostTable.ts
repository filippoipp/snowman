import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePostTable1617054380361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name: 'posts',
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
                    name: 'user_name',
                    type: 'varchar',
                },
                {
                    name: 'text',
                    type: 'varchar',
                },
                {
                    name: 'color',
                    type: 'varchar',
                },
                {
                    name: 'visibility',
                    type: 'varchar',
                }
            ]
        }));

        await queryRunner.createForeignKey(
            'posts',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
