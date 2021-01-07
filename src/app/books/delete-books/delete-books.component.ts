import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../book-service.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.scss']
})
export class DeleteBooksComponent implements OnInit {

  book: Book = {};
  id: number;
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

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(() => {
      console.log('Thành công!!');
    }, () => {
      console.log('Lỗi cụ nó rồi');
    });
  }
}
