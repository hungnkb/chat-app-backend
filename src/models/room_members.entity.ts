import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rooms } from './rooms.entity';
import { Users } from './users.entity';

@Entity()
export class RoomMember {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rooms, (rooms) => rooms.id)
  room: Rooms;

  @ManyToOne(() => Users, (users) => users.id)
  user: Users;
}
