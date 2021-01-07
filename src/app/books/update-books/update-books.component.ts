import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../book-service.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit {

  id: number;
  book: Book = {};
  message = '';

  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // this.product = await this.getProductById(this.id);
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  getBookById(id) {
    this.bookService.getBookById(id).subscribe(result => {
      this.book = result;
    }, error => console.log(error));
  }

  updateBook(id) {
    this.bookService.updateBook(id, this.book).subscribe(() => {
      console.log('Thành công!!');
    }, () => {
      console.log('Lỗi cụ nó rồi');
    });
    this.message = 'Sửa thành công';
  }
}
