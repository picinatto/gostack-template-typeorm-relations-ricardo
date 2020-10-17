import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

Entity('customers');
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  name: string;

  @Column('email')
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Customer;
