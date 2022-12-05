import { Injectable } from '@angular/core';
import { BookType } from '../book-type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: BookType[] = [];

  add(book: BookType) {
    this.cart.push(book);
    console.log(this.cart);
  }
  get() {
    return this.cart;
  }
  remove(book: BookType) {
    this.cart = this.cart.filter((b) => b !== book);
  }
}
