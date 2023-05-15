import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';
import { Rooms } from './rooms.entity';
import { Seens } from './seens.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 5500 })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;

  @ManyToOne(() => Users, (users) => users.id)
  user: Users;

  @ManyToOne(() => Rooms, (rooms) => rooms.id)
  room: Rooms;

  @OneToMany(() => Seens, (seens) => seens.id)
  seen: Seens[];
}
