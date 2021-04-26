import { createAction, props } from "@ngrx/store";
import { Book } from "./app.model";

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
)

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
)

export const loadBookList = createAction(
  '[Book List] Load Books'
)

export const retrievedBookList = createAction(
  '[Book List] Retrieve Books Success',
  props<{ Book: Book[] }>()
)

export const createBook = createAction(
  '[Book List] Create Book',
  props<{ book: Book }>()
)

export const deleteBook = createAction(
  '[Book List] Delete Book',
  props<{ bookId: string }>()
)