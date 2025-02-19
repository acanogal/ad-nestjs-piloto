import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookSeeder {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async seed() {
    const books = [
      {
        title: 'Cien años de soledad',
        genre: 'Novela',
        description:
          'Una de las obras más importantes de la literatura hispanoamericana',
        author: 'Gabriel García Márquez',
        publisher: 'Sudamericana',
        pages: 471,
        image_url: 'https://example.com/cien_anos.jpg',
      },
      {
        title: '1984',
        genre: 'Distopía',
        description: 'Un mundo totalitario vigilado por el Gran Hermano',
        author: 'George Orwell',
        publisher: 'Secker & Warburg',
        pages: 328,
        image_url: 'https://example.com/1984.jpg',
      },
      {
        title: 'El Principito',
        genre: 'Fábula',
        description: 'Una historia filosófica con un trasfondo poético',
        author: 'Antoine de Saint-Exupéry',
        publisher: 'Reynal & Hitchcock',
        pages: 96,
        image_url: 'https://example.com/principito.jpg',
      },
    ];

    for (const book of books) {
      const temp = await this.bookRepository.findOne({
        where: { title: book.title },
      });
      if (!temp) await this.bookRepository.save(book);
    }
  }
}
