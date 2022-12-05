import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { BookType } from '../../book-type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private cartService: CartService) {}

  @Input() book: BookType = {} as BookType;
  // @Output() eventBook = new EventEmitter<BookType>();
  isAdded: boolean = false;
  handleCart() {
    // this.eventBook.emit(this.book)
    this.cartService.add(this.book);
    this.isAdded = true;
  }
  handleRemove() {
    this.cartService.remove(this.book);
    this.isAdded = false;
  }
}
