import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  //   Query,
  Req,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './book.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  //   @Get()
  //   findAll() {
  //     return this.booksService.findAll();
  //   }
  //   @Get()
  //   findAll(@Query('order') order: string) {
  //     const params = [];

  //     if (order !== undefined) {
  //       params.push(`'${order}'`);
  //     }

  //     return this.booksService.findAll(params);
  //   }
  @Get()
  @ApiOperation({ summary: 'Get all books' })
  findAll(@Req() request: Request) {
    return this.booksService.findAll(request.query);
  }
  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }
  //   @Post()
  //   createBook(@Body() body) {
  //     const newBook: any = body;
  //     return this.booksService.createBook(newBook);
  //   }
  @Post()
  createBook(@Body() newBook: BookDto) {
    return this.booksService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }
  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() book: BookDto) {
    return this.booksService.updateBook(bookId, book);
  }
}
