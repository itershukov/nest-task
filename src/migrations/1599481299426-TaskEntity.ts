import {MigrationInterface, QueryRunner} from "typeorm";

export class TaskEntity1599481299426 implements MigrationInterface {
    name = 'TaskEntity1599481299426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task_entity" ("id" SERIAL NOT NULL, "title" character varying(500) NOT NULL, "order" integer NOT NULL, CONSTRAINT "UQ_bd16562cab77cc90013e569b85b" UNIQUE ("order"), CONSTRAINT "PK_0385ca690d1697cdf7ff1ed3c2f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task_entity"`);
    }

}
