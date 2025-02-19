import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookSeeder } from './books.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BookSeeder],
  controllers: [BooksController],
  exports: [BookSeeder],
})
export class BooksModule {}
