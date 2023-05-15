import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstInitTable1683952649671 implements MigrationInterface {
  name = 'FirstInitTable1683952649671';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
  }
}
