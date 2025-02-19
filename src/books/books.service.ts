import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';
import { Book } from './book.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  books: Book[] = [
    {
      id: 1,
      title: 'Una historia de España',
      genre: 'Historia',
      description:
        'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
      author: 'Arturo Pérez-Reverte',
      publisher: 'Alfaguara',
      pages: 256,
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/41%2B-e981m1L._SX311_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Historia de España contada para escépticos',
      genre: 'Historia',
      description:
        'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
      author: 'Juan Eslava Galán',
      publisher: 'Booket',
      pages: 592,
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/51IyZ5Mq8YL._SX326_BO1,204,203,200_.jpg',
    },
  ];
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  // findAll(): string {
  //   return 'This action returns all books';
  // }
  // findAll(params): any {
  //   return params.length > 0
  //     ? `findAll funcionando con ${params}`
  //     : 'findAll funcionando';
  // }
  // findAll(params): any {
  //   let msg = `findAll funcionando. Parámetros:`;

  //   if (params.order !== undefined) {
  //     msg = msg + ` order: ${params.order}`;
  //   }

  //   if (params.limit !== undefined) {
  //     msg = msg + ` limit: ${params.limit}`;
  //   }

  //   return msg;
  // }

  findAll(params?): any {
    console.log(params);
    return this.books;
  }

  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }
  // createBook(newBook: any) {
  //   return newBook;
  // }
  createBook(newBook: BookDto) {
    return newBook;
  }
  deleteBook(bookId: string) {
    return `deleteBook funcionando con bookId: ${bookId}`;
  }

  updateBook(bookId: string, newBook: BookDto) {
    return newBook;
  }
}
