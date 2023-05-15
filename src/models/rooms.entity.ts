import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { RoomMember } from './room_members.entity';

enum RoomEnum {
  ROOM_PAIR,
  ROOM_GROUP
}

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  category: RoomEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;

  @OneToMany(() => RoomMember, (roomMember) => roomMember.id)
  roomMember: RoomMember[];
}
