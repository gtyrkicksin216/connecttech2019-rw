export class Book {
  title: string;
  author: string;
  year: number;
  quantity: number;
  constructor(
    title: string,
    author: string,
    year: number,
    quantity: number,
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.quantity = quantity;
  }
}
