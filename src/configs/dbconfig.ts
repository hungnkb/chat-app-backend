import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Messages } from '../models/messages.entity';
import { RoomMember } from '../models/room_members.entity';
import { Rooms } from '../models/rooms.entity';
import { Seens } from '../models/seens.entity';
import { Users } from '../models/users.entity';
dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['./dist/src/models/*.js'],
  migrations: ['./dist/migrations/*.js']
});

export default dataSource;
