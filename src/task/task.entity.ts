import {Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';

@Entity()
@Unique(['order'])
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({type: 'int'})
  order: number;
}
