import { Injectable } from '@angular/core';
import {Book} from './model/book';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  booklist: Book[] =  [];

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/books`);
  }

  getBookById(id): Observable<Book> {
    return this.http.get<Book>(API_URL + `/books/${id}`);
  }

  addNewBook(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + `/books`, book);
  }

  deleteBook(id): Observable<Book> {
    return this.http.delete<Book>(API_URL + `/books/${id}`);
  }

  updateBook(id, book: Book): Observable<Book>{
    return this.http.put<Book>(API_URL + `/books/${id}`, book);
  }
}
