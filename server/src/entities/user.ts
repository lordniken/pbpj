import { Entity, Column } from 'typeorm';
import { UserRoleType } from 'src/dto/role';
import { Base } from 'src/entities/base';

@Entity('users')
export class UserEntity extends Base {
  @Column({ type: 'varchar', length: 30 })
  username: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  passwordHash: string;

  @Column({ type: 'varchar', length: 50 })
  role: UserRoleType;
}
