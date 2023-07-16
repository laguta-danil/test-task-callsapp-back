import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 1000 })
  body: string;

  @Column()
  pubDate: Date;
}
