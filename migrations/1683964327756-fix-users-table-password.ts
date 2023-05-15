import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixUsersTablePassword1683964327756 implements MigrationInterface {
  name = 'FixUsersTablePassword1683964327756';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
  }
}
