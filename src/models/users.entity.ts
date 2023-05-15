import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rooms } from './rooms.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  lastOnline: number;

  @OneToMany(() => Rooms, (rooms) => rooms.id)
  room: Rooms[];
}
