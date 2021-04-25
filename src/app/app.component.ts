import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleBooksService } from './book-list/book-list.service';
import { Book } from './state/app.model';
import { retrievedBookList, addBook, removeBook } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$: Observable<any>;
  bookCollection$: Observable<any>;

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.books$ = this.store.pipe(
      select(selectBooks)
    );
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook( { bookId } ));
  }
  
  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

}


