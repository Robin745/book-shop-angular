import { Component } from '@angular/core';
import { BookType } from '../book-type';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }
  searchText: string = '';
  isShowing: boolean = true;

  books: BookType[] = [];

}
