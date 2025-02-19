import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
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

  async findAll(params?): Promise<Book[]> {
    console.log(params);
    return this.booksRepository.find();
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
