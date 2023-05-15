import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstInitTable1683952027611 implements MigrationInterface {
  name = 'FirstInitTable1683952027611';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`room_member\` (\`id\` int NOT NULL AUTO_INCREMENT, \`roomId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`rooms\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`category\` int NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`lastOnline\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`seens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`seenAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userId\` int NULL, \`messageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`messages\` (\`id\` int NOT NULL AUTO_INCREMENT, \`body\` varchar(5500) NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userId\` int NULL, \`roomId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`room_member\` ADD CONSTRAINT \`FK_6940db8d5a7d65b077ccfacf95d\` FOREIGN KEY (\`roomId\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`room_member\` ADD CONSTRAINT \`FK_6eb91357acd7efbd4f65d2375e1\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`seens\` ADD CONSTRAINT \`FK_be7946961e5eba3402d611b3512\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`seens\` ADD CONSTRAINT \`FK_579c69719d92a378b37cfb9b2f5\` FOREIGN KEY (\`messageId\`) REFERENCES \`messages\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` ADD CONSTRAINT \`FK_4838cd4fc48a6ff2d4aa01aa646\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` ADD CONSTRAINT \`FK_aaa8a6effc7bd20a1172d3a3bc8\` FOREIGN KEY (\`roomId\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`messages\` DROP FOREIGN KEY \`FK_aaa8a6effc7bd20a1172d3a3bc8\``);
    await queryRunner.query(`ALTER TABLE \`messages\` DROP FOREIGN KEY \`FK_4838cd4fc48a6ff2d4aa01aa646\``);
    await queryRunner.query(`ALTER TABLE \`seens\` DROP FOREIGN KEY \`FK_579c69719d92a378b37cfb9b2f5\``);
    await queryRunner.query(`ALTER TABLE \`seens\` DROP FOREIGN KEY \`FK_be7946961e5eba3402d611b3512\``);
    await queryRunner.query(`ALTER TABLE \`room_member\` DROP FOREIGN KEY \`FK_6eb91357acd7efbd4f65d2375e1\``);
    await queryRunner.query(`ALTER TABLE \`room_member\` DROP FOREIGN KEY \`FK_6940db8d5a7d65b077ccfacf95d\``);
    await queryRunner.query(`DROP TABLE \`messages\``);
    await queryRunner.query(`DROP TABLE \`seens\``);
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`rooms\``);
    await queryRunner.query(`DROP TABLE \`room_member\``);
  }
}
