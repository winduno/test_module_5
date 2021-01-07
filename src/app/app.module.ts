import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { UpdateBooksComponent } from './books/update-books/update-books.component';
import { DetailBooksComponent } from './books/detail-books/detail-books.component';
import { DeleteBooksComponent } from './books/delete-books/delete-books.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    AddBooksComponent,
    UpdateBooksComponent,
    DetailBooksComponent,
    DeleteBooksComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
