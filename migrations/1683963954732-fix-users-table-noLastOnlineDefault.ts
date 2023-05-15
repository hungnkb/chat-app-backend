import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixUsersTableNoLastOnlineDefault1683963954732 implements MigrationInterface {
  name = 'FixUsersTableNoLastOnlineDefault1683963954732';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastOnline\` \`lastOnline\` timestamp NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`lastOnline\` \`lastOnline\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`
    );
  }
}
