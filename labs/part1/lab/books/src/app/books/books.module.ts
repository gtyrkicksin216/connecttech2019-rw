import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { BooksSortPipe } from './books-sort.pipe';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    BooksComponent,
    BooksSortPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ BooksService ],
  exports: [
    BooksComponent,
  ]
})
export class BooksModule { }
