import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookServiceService} from '../../book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-books',
  templateUrl: './detail-books.component.html',
  styleUrls: ['./detail-books.component.scss']
})
export class DetailBooksComponent implements OnInit {
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
}
