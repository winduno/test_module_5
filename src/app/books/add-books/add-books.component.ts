import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookServiceService} from '../../book-service.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  book: Book = {};
  message = '';
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  addBook(){
    this.bookService.addNewBook(this.book).subscribe(() => {
        console.log('success');
        this.message = 'Thêm mới sách thành công';
    }, () => {
      console.log('failed');
      this.message = 'Thêm mới sách thất bại';
    });
    this.book = {};
  }
}
