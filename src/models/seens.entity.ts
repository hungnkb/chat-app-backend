import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';
import { Messages } from './messages.entity';

@Entity()
export class Seens {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  seenAt: number;

  @ManyToOne(() => Users, (users) => users.id)
  user: Users;

  @ManyToOne(() => Messages, (messages) => messages.id)
  message: Messages;
}
