import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleBooksService } from './../../book-list/book-list.service';
import { Book } from './../../state/app.model';
import * as AppActions from './../../state/books.actions';
import { selectBookCollection, selectBooks } from './../../state/books.selectors';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  books$: Observable<any>;
  bookCollection$: Observable<any>;

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(AppActions.loadBookList());
    this.books$ = this.store.pipe(
      select(selectBooks)
    );
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
    // this.booksService
    //   .getBooks()
    //   .subscribe((Book) => this.store.dispatch(AppActions.retrievedBookList({ Book })));
  }

  onAdd(bookId: string) {
    this.store.dispatch(AppActions.addBook( { bookId } ));
  }

  onRemove(bookId) {
    this.store.dispatch(AppActions.removeBook({ bookId }));
  }

  onDelete(bookId) {
    this.store.dispatch(AppActions.deleteBook( { bookId } ))
  }

}

