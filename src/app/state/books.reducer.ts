import { createReducer, on } from "@ngrx/store";
import { Book } from "./app.model";
import * as BookActions from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(BookActions.retrievedBookList, (state, { Book }) => [...state, ...Book]),
  on(BookActions.loadBookList, (state) => [...state]),
  on(BookActions.createBook, (state, { book }) => [...state, book]),
  on(BookActions.deleteBook, (state, { bookId }) => {
    return state.filter(book => book.id !== bookId);
  })
);