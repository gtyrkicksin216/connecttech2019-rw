import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from './books.service';
import { Subscription, Observable } from 'rxjs';
import { Book } from './book';

@Component({
  // tslint:disable-next-line
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book$: Subscription;
  books: Book[] = [];

  constructor(public service: BooksService) {  }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.service.getBooks()
      .subscribe(data => this.books = data);
  }

}
