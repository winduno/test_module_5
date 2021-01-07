import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../book-service.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  bookList: Book[] = [];
  count: 0;

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBook().subscribe(result => {
      this.bookList = result;
      this.count = result.length;
    }, error => console.log(error));
  }
}
