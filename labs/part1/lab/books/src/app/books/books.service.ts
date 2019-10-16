import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`/books`);
  }

}
