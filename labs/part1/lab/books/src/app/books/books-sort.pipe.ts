import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'sortbooks'
})
export class BooksSortPipe implements PipeTransform  {
  transform(books: Book[]): Book[] {
    // NOTE: maintain immutibility with pipes by using the spread operator to avoid mutating the original data
    return books ? [...books].sort((a, b) => a.title.localeCompare(b.title)) : [];
  }
}
