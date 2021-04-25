import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { GoogleBooksService } from "../book-list/book-list.service";
import * as AppActions from './../state/books.actions';
@Injectable()
export class BookEffects {

  public loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadBookList),
      mergeMap(() => this.service.getBooks()
        .pipe(
          map(books => ({ type: AppActions.retrievedBookList.type, Book: books })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: GoogleBooksService,
    private store: Store
  ) {}

  // loadBooks$: Observable<any> = createEffect(() => this.actions$.pipe(
  //   ofType(AppActions.loadBookList),
  //   mergeMap(() => this.service.getBooks()
  //     .pipe(
  //       map(books => ({ type: AppActions.retrievedBookList, payload: books })),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );

}