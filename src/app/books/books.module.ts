import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent], //which components under this module 
  providers:[BooksService],  //making service only for this components
  imports: [
    CommonModule
  ],
  exports:[BooksComponent], //finally export it so that root-app can use it 
})
export class BooksModule { }
