import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1641250760042 implements MigrationInterface {
    name = 'firstMigration1641250760042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_tags_tags" ("coursesId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_002f62ec2f0a22dc90ee3f25d4b" PRIMARY KEY ("coursesId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d8199628c7f99576bdc8737f7a" ON "courses_tags_tags" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3a8605a1a1aef4816d6ef49fc5" ON "courses_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "courses_tags_tags" ADD CONSTRAINT "FK_d8199628c7f99576bdc8737f7ae" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "courses_tags_tags" ADD CONSTRAINT "FK_3a8605a1a1aef4816d6ef49fc57" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses_tags_tags" DROP CONSTRAINT "FK_3a8605a1a1aef4816d6ef49fc57"`);
        await queryRunner.query(`ALTER TABLE "courses_tags_tags" DROP CONSTRAINT "FK_d8199628c7f99576bdc8737f7ae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3a8605a1a1aef4816d6ef49fc5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d8199628c7f99576bdc8737f7a"`);
        await queryRunner.query(`DROP TABLE "courses_tags_tags"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
