import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  genre: string;

  @Column('text', { nullable: false })
  description: string;

  @Column({ nullable: false })
  author: string;

  @Column({ nullable: false })
  publisher: string;

  @Column({ nullable: false })
  pages: number;

  @Column({ nullable: false })
  image_url: string;
}
