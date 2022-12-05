import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() { }
  
  getBooks() {
    return [
      {
        name: 'First Book',
        author: 'Robert brown',
        image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
        price: 500,
      },
      {
        name: 'Second Book',
        author: 'Bilgets brown',
        image:
          'https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png',
        price: 600,
      },
      {
        name: 'Third Book',
        author: 'Jukar Burg brown',
        image:
          'https://static-cse.canva.com/blob/921489/RedandBeigeCuteIllustrationYoungAdultBookCover.jpg',
        price: 700,
      },
      {
        name: 'Fourth Book',
        author: 'Robin brown',
        image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
        price: 500,
      },
      {
        name: 'Fifth Book',
        author: 'Ratul chong',
        image:
          'https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png',
        price: 600,
      },
      {
        name: 'Sixth Book',
        author: 'Burg brown',
        image:
          'https://static-cse.canva.com/blob/921489/RedandBeigeCuteIllustrationYoungAdultBookCover.jpg',
        price: 700,
      },
      {
        name: 'Seventh Book',
        author: 'Moshiur brown',
        image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
        price: 500,
      },
      {
        name: 'Eighth Book',
        author: 'Misrat chong',
        image:
          'https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png',
        price: 600,
      }
    ];
  }
}
