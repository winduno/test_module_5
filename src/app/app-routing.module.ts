import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBooksComponent} from './books/add-books/add-books.component';
import {DeleteBooksComponent} from './books/delete-books/delete-books.component';
import {DetailBooksComponent} from './books/detail-books/detail-books.component';
import {ListBooksComponent} from './books/list-books/list-books.component';
import {UpdateBooksComponent} from './books/update-books/update-books.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: ListBooksComponent},
  {path: 'add-book', component: AddBooksComponent},
  {path: 'delete-book/:id', component: DeleteBooksComponent},
  {path: 'detail-book', component: DetailBooksComponent},
  {path: 'list-book', component: ListBooksComponent},
  {path: 'update-book/:id', component: UpdateBooksComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
